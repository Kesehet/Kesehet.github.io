<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\Exception as MailException;
use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/vendor/autoload.php';

const MAX_REQUEST_BYTES = 16384;
const RATE_WINDOW_SECONDS = 3600;
const RATE_MAX_REQUESTS = 5;

function env_required(string $name): string
{
    $value = getenv($name);
    if ($value === false || trim($value) === '') {
        throw new RuntimeException("Missing required server configuration: {$name}");
    }
    return trim($value);
}

function wants_json(): bool
{
    return str_contains(strtolower($_SERVER['HTTP_ACCEPT'] ?? ''), 'application/json');
}

function respond(int $status, string $message, bool $ok = false): never
{
    http_response_code($status);
    header('X-Content-Type-Options: nosniff');
    header('Referrer-Policy: no-referrer');
    header('Cache-Control: no-store');

    if (wants_json()) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode(
            ['ok' => $ok, 'message' => $message],
            JSON_THROW_ON_ERROR | JSON_UNESCAPED_SLASHES
        );
        exit;
    }

    $targetName = $ok ? 'CONTACT_SUCCESS_URL' : 'CONTACT_ERROR_URL';
    $target = env_required($targetName);
    header('Location: ' . $target, true, 303);
    exit;
}

function normalize_text(mixed $value): string
{
    if (!is_string($value)) {
        return '';
    }
    $value = str_replace("\0", '', $value);
    $value = preg_replace('/[ \t]+/u', ' ', trim($value)) ?? '';
    return $value;
}

function has_header_injection(string $value): bool
{
    return str_contains($value, "\r") || str_contains($value, "\n");
}

function enforce_origin(): void
{
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    $allowed = array_values(array_filter(array_map(
        'trim',
        explode(',', env_required('CONTACT_ALLOWED_ORIGINS'))
    )));

    if ($origin === '' || !in_array($origin, $allowed, true)) {
        respond(403, 'This form origin is not allowed.');
    }

    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}

function enforce_rate_limit(): void
{
    $directory = env_required('CONTACT_RATE_DIR');
    if (!is_dir($directory) && !mkdir($directory, 0700, true) && !is_dir($directory)) {
        throw new RuntimeException('Rate-limit storage is unavailable.');
    }

    $address = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $key = hash_hmac('sha256', $address, env_required('CONTACT_RATE_SECRET'));
    $path = rtrim($directory, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . $key . '.json';
    $now = time();
    $state = ['window' => $now, 'count' => 0];

    $handle = fopen($path, 'c+');
    if ($handle === false || !flock($handle, LOCK_EX)) {
        throw new RuntimeException('Rate-limit lock is unavailable.');
    }

    $existing = stream_get_contents($handle);
    if (is_string($existing) && $existing !== '') {
        $decoded = json_decode($existing, true);
        if (is_array($decoded) && isset($decoded['window'], $decoded['count'])) {
            $state = $decoded;
        }
    }

    if (($now - (int) $state['window']) >= RATE_WINDOW_SECONDS) {
        $state = ['window' => $now, 'count' => 0];
    }

    $state['count'] = (int) $state['count'] + 1;
    ftruncate($handle, 0);
    rewind($handle);
    fwrite($handle, json_encode($state, JSON_THROW_ON_ERROR));
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);
    @chmod($path, 0600);

    if ($state['count'] > RATE_MAX_REQUESTS) {
        respond(429, 'Too many enquiries were submitted. Please try again later.');
    }
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, 'Only POST requests are accepted.');
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength <= 0 || $contentLength > MAX_REQUEST_BYTES) {
    respond(413, 'The request is empty or too large.');
}

try {
    enforce_origin();
    enforce_rate_limit();

    $honeypot = normalize_text($_POST['website'] ?? '');
    if ($honeypot !== '') {
        // Return a generic success so automated spam does not learn the trap.
        respond(200, 'Thanks—your enquiry was sent.', true);
    }

    $name = normalize_text($_POST['name'] ?? '');
    $email = normalize_text($_POST['email'] ?? '');
    $company = normalize_text($_POST['company'] ?? '');
    $projectType = normalize_text($_POST['project_type'] ?? '');
    $message = normalize_text($_POST['message'] ?? '');
    $consent = normalize_text($_POST['consent'] ?? '');

    if (
        mb_strlen($name) < 1 ||
        mb_strlen($name) > 100 ||
        mb_strlen($email) > 254 ||
        !filter_var($email, FILTER_VALIDATE_EMAIL) ||
        mb_strlen($company) > 120 ||
        mb_strlen($projectType) > 80 ||
        mb_strlen($message) < 20 ||
        mb_strlen($message) > 5000 ||
        $consent !== 'yes'
    ) {
        respond(422, 'Please review the form fields and try again.');
    }

    if (
        has_header_injection($name) ||
        has_header_injection($email) ||
        has_header_injection($company) ||
        has_header_injection($projectType)
    ) {
        respond(422, 'The submitted contact details are invalid.');
    }

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = env_required('SMTP_HOST');
    $mail->Port = (int) env_required('SMTP_PORT');
    $mail->SMTPAuth = true;
    $mail->Username = env_required('SMTP_USERNAME');
    $mail->Password = env_required('SMTP_PASSWORD');
    $mail->SMTPSecure = env_required('SMTP_ENCRYPTION');
    $mail->CharSet = 'UTF-8';
    $mail->Timeout = 15;

    $mail->setFrom(env_required('CONTACT_FROM_EMAIL'), 'Portfolio contact form');
    $mail->addAddress(env_required('CONTACT_TO_EMAIL'));
    $mail->addReplyTo($email, $name);
    $mail->Subject = 'Portfolio enquiry';
    $mail->isHTML(false);
    $mail->Body =
        "Name: {$name}\n" .
        "Email: {$email}\n" .
        "Company: " . ($company !== '' ? $company : 'Not supplied') . "\n" .
        "Project type: " . ($projectType !== '' ? $projectType : 'Not supplied') . "\n\n" .
        "Message:\n{$message}\n";
    $mail->send();

    respond(200, 'Thanks—your enquiry was sent.', true);
} catch (MailException $exception) {
    error_log('Contact mail delivery failed.');
    respond(502, 'The message could not be delivered right now.');
} catch (Throwable $exception) {
    error_log('Contact handler failed.');
    respond(500, 'The contact service is temporarily unavailable.');
}
