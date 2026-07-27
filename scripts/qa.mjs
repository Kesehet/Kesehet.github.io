import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { HtmlValidate } from "html-validate";

const root = process.cwd();
const dist = path.join(root, "dist");
const basePath = (process.env.BASE_PATH || "/").replace(/^\/+|\/+$/g, "");

if (!fs.existsSync(dist)) {
  throw new Error("dist/ does not exist. Run npm run build first.");
}

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

const files = walk(dist);
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const validator = new HtmlValidate({
  extends: ["html-validate:recommended"],
  rules: {
    "no-inline-style": "off",
    "prefer-native-element": "off",
    "valid-id": "error",
    "wcag/h30": "error",
    "wcag/h32": "error",
    "wcag/h36": "error",
    "wcag/h37": "error"
  }
});

let failureCount = 0;

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const report = await validator.validateString(html, file);
  if (!report.valid) {
    failureCount += report.errorCount;
    for (const result of report.results) {
      for (const message of result.messages.filter((item) => item.severity === 2)) {
        console.error(
          `HTML ${path.relative(root, file)}:${message.line}:${message.column} ${message.ruleId} ${message.message}`
        );
      }
    }
  }

  const attributePattern = /\b(?:href|src)=["']([^"'#]+)["']/g;
  for (const match of html.matchAll(attributePattern)) {
    const target = match[1];
    if (
      /^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(target) ||
      target.startsWith("//")
    ) {
      continue;
    }

    const cleanTarget = decodeURIComponent(target.split("?")[0]);
    const sourceDirectory = path.dirname(file);
    const rootTarget = cleanTarget.replace(/^\/+/, "");
    const deploymentRelativeTarget =
      basePath && (rootTarget === basePath || rootTarget.startsWith(`${basePath}/`))
        ? rootTarget.slice(basePath.length).replace(/^\/+/, "")
        : rootTarget;
    const candidate = cleanTarget.startsWith("/")
      ? path.join(dist, deploymentRelativeTarget)
      : path.resolve(sourceDirectory, cleanTarget);
    const candidates = [
      candidate,
      path.join(candidate, "index.html"),
      candidate.endsWith(path.sep) ? path.join(candidate, "index.html") : ""
    ].filter(Boolean);

    if (!candidates.some((value) => fs.existsSync(value))) {
      failureCount += 1;
      console.error(
        `LINK ${path.relative(root, file)} references missing local target: ${target}`
      );
    }
  }
}

const generatedText = files
  .filter((file) => /\.(?:html|js|css|xml|txt|svg|json)$/i.test(file))
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n");

const withheldLinks = [
  "github.com/Kesehet/aisql",
  "github.com/Kesehet/mediapitch",
  "github.com/Kesehet/fillmasjid-azaan-server"
];

for (const unsafeLink of withheldLinks) {
  if (generatedText.includes(unsafeLink)) {
    failureCount += 1;
    console.error(`SAFETY generated output contains withheld repository URL: ${unsafeLink}`);
  }
}

const tracked = execFileSync("git", ["ls-files", "-co", "--exclude-standard"], {
  cwd: root,
  encoding: "utf8"
})
  .split(/\r?\n/)
  .filter(Boolean)
  .map((file) => path.join(root, file))
  .filter((file) => fs.existsSync(file) && fs.statSync(file).isFile());

const secretRules = [
  { name: "private key", pattern: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/ },
  { name: "AWS access key", pattern: /\bAKIA[0-9A-Z]{16}\b/ },
  { name: "GitHub token", pattern: /\bgh[pousr]_[A-Za-z0-9_]{30,}\b/ },
  { name: "Slack token", pattern: /\bxox[baprs]-[A-Za-z0-9-]{20,}\b/ },
  { name: "Stripe secret", pattern: /\bsk_(?:live|test)_[A-Za-z0-9]{20,}\b/ }
];

for (const file of tracked) {
  if (!/\.(?:astro|css|env|example|html|js|json|md|mjs|php|svg|ts|txt|xml)$/i.test(file)) {
    continue;
  }
  const content = fs.readFileSync(file, "utf8");
  for (const rule of secretRules) {
    if (rule.pattern.test(content)) {
      failureCount += 1;
      console.error(`SECRET ${path.relative(root, file)} matches ${rule.name}`);
    }
  }
}

if (failureCount > 0) {
  console.error(`QA failed with ${failureCount} issue(s).`);
  process.exit(1);
}

console.log(
  `QA passed: ${htmlFiles.length} HTML files validated, local links resolved, withheld links absent, and high-risk secret patterns not found.`
);
