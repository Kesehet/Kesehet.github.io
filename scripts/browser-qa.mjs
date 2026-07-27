import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const root = process.cwd();
const dist = path.join(root, "dist");
const artifactDirectory = path.join(root, "qa-artifacts");
fs.mkdirSync(artifactDirectory, { recursive: true });

const types = {
  ".css": "text/css",
  ".html": "text/html; charset=UTF-8",
  ".js": "text/javascript",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".xml": "application/xml"
};

const server = http.createServer((request, response) => {
  const url = new URL(request.url || "/", "http://127.0.0.1");
  let requestPath = decodeURIComponent(url.pathname).replace(/^\/+/, "");
  let filePath = path.join(dist, requestPath);
  if (requestPath === "" || requestPath.endsWith("/")) filePath = path.join(filePath, "index.html");
  if (!path.extname(filePath) && fs.existsSync(path.join(filePath, "index.html"))) {
    filePath = path.join(filePath, "index.html");
  }
  if (!filePath.startsWith(dist) || !fs.existsSync(filePath)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }
  response.writeHead(200, {
    "Content-Type": types[path.extname(filePath)] || "application/octet-stream"
  });
  fs.createReadStream(filePath).pipe(response);
});

await new Promise((resolve) => server.listen(4179, "127.0.0.1", resolve));

let browser;
try {
  browser = await chromium.launch({ channel: "msedge", headless: true });
  const widths = [
    { name: "mobile-320", width: 320, height: 900 },
    { name: "mobile-375", width: 375, height: 900 },
    { name: "tablet-768", width: 768, height: 1024 },
    { name: "desktop-1440", width: 1440, height: 1000 }
  ];

  for (const viewport of widths) {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();
    await page.goto("http://127.0.0.1:4179/", { waitUntil: "networkidle" });
    await page.screenshot({
      path: path.join(artifactDirectory, `${viewport.name}.jpg`),
      type: "jpeg",
      quality: 72,
      fullPage: false
    });
    const horizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    if (horizontalOverflow) throw new Error(`Horizontal overflow at ${viewport.width}px.`);
    await context.close();
  }

  for (const route of ["/", "/projects/", "/projects/aisql/", "/contact/"]) {
    const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const page = await context.newPage();
    await page.goto(`http://127.0.0.1:4179${route}`, { waitUntil: "networkidle" });
    const results = await new AxeBuilder({ page }).analyze();
    if (results.violations.length) {
      const names = results.violations.map((violation) => violation.id).join(", ");
      throw new Error(`axe violations on ${route}: ${names}`);
    }
    await context.close();
  }

  const noScriptContext = await browser.newContext({
    viewport: { width: 320, height: 900 },
    javaScriptEnabled: false
  });
  const noScriptPage = await noScriptContext.newPage();
  await noScriptPage.goto("http://127.0.0.1:4179/", { waitUntil: "domcontentloaded" });
  const visibleNavigationLinks = await noScriptPage
    .locator("#primary-navigation a")
    .evaluateAll((links) => links.filter((link) => getComputedStyle(link).display !== "none").length);
  if (visibleNavigationLinks < 6) {
    throw new Error("Mobile navigation is not available when JavaScript is disabled.");
  }
  await noScriptContext.close();

  console.log("Browser QA passed at 320, 375, 768 and 1440px; axe passed on key routes.");
} finally {
  await browser?.close();
  server.close();
}
