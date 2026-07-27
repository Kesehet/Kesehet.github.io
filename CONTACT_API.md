# Contact API contract

The portfolio is static. Contact submissions go to a separately hosted HTTPS PHP endpoint configured with `PUBLIC_CONTACT_ENDPOINT`.

## Request

`POST` using `multipart/form-data` or `application/x-www-form-urlencoded`.

| Field | Required | Limits/notes |
| --- | --- | --- |
| `name` | Yes | Normalized text, 1–100 characters |
| `email` | Yes | Valid email, maximum 254 characters |
| `company` | No | Normalized text, maximum 120 characters |
| `project_type` | No | Maximum 80 characters; server should prefer an allowlist |
| `message` | Yes | 20–5,000 characters |
| `consent` | Yes | Must equal `yes` |
| `website` | No | Honeypot; legitimate submissions leave it empty |

The server rejects:

- non-POST methods;
- bodies over the configured request limit;
- origins outside the exact allowlist;
- invalid/missing fields;
- CR/LF header injection attempts;
- honeypot submissions;
- requests exceeding the rate limit.

## Responses

Enhanced JavaScript requests send `Accept: application/json`.

Success:

```json
{
  "ok": true,
  "message": "Thanks-your enquiry was sent."
}
```

Validation/rate/server errors use an appropriate HTTP status and:

```json
{
  "ok": false,
  "message": "Useful, non-sensitive error text."
}
```

Normal browser form submissions receive a `303 See Other` redirect to a configured success/error URL on the portfolio origin.

## CORS and origin policy

- Never use `Access-Control-Allow-Origin: *`.
- Configure a comma-separated exact HTTPS allowlist such as:

  ```text
  CONTACT_ALLOWED_ORIGINS=https://hamoodsiddiqui.com,https://www.hamoodsiddiqui.com
  ```

- Return `Access-Control-Allow-Origin` only when the request `Origin` exactly matches.
- Add `Vary: Origin`.
- A plain cross-origin HTML form POST does not require permissive CORS, but the endpoint must still enforce the origin.

## Server environment

The example expects:

```text
CONTACT_ALLOWED_ORIGINS=https://hamoodsiddiqui.com
CONTACT_SUCCESS_URL=https://hamoodsiddiqui.com/contact/?sent=1
CONTACT_ERROR_URL=https://hamoodsiddiqui.com/contact/?sent=0
CONTACT_TO_EMAIL=approved-recipient@example.com
CONTACT_FROM_EMAIL=portfolio@example.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USERNAME=server-side-user
SMTP_PASSWORD=server-side-secret
SMTP_ENCRYPTION=tls
CONTACT_RATE_DIR=/path/outside/web/root/contact-rate
CONTACT_RATE_SECRET=long-random-server-side-value
```

These values belong only on the server. Do not prefix secrets with `PUBLIC_`, commit them, or expose them to frontend builds.

## SMTP

Use authenticated SMTP through a maintained library such as PHPMailer. Do not construct mail headers from raw form fields and do not depend on unauthenticated PHP `mail()` in production. The visitor’s email should be used as `Reply-To` only after validation and CR/LF rejection.

## Rate limiting

The example uses a simple filesystem counter keyed by a hash of the requester address. For multiple application servers, replace it with a shared Redis/database limit at the reverse proxy or application layer. Do not store raw IP addresses longer than operationally necessary.

## Reverse-proxy controls

Also configure:

- HTTPS only;
- a request-body limit at Nginx/Apache;
- request/time limits;
- bot/WAF controls when appropriate;
- private logs with a short retention period;
- no directory listing;
- PHP and dependency updates;
- a CSP and security headers for any human-facing response page.
