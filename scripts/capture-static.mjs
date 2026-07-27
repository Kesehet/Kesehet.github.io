import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { chromium } from "playwright";

const [sourceArgument, outputArgument] = process.argv.slice(2);
if (!sourceArgument || !outputArgument) {
  throw new Error("Usage: node scripts/capture-static.mjs <source-directory> <output.png>");
}

const source = path.resolve(sourceArgument);
const output = path.resolve(outputArgument);
if (!fs.existsSync(path.join(source, "index.html"))) {
  throw new Error("The source directory must contain index.html.");
}
fs.mkdirSync(path.dirname(output), { recursive: true });

const contentTypes = {
  ".css": "text/css",
  ".html": "text/html; charset=UTF-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2"
};

const server = http.createServer((request, response) => {
  const url = new URL(request.url || "/", "http://127.0.0.1");
  const requestPath = decodeURIComponent(url.pathname).replace(/^\/+/, "") || "index.html";
  const candidate = path.resolve(source, requestPath);
  if (!candidate.startsWith(source) || !fs.existsSync(candidate) || fs.statSync(candidate).isDirectory()) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }
  response.writeHead(200, {
    "Content-Type": contentTypes[path.extname(candidate)] || "application/octet-stream"
  });
  fs.createReadStream(candidate).pipe(response);
});

await new Promise((resolve) => server.listen(4182, "127.0.0.1", resolve));

let browser;
try {
  browser = await chromium.launch({ channel: "msedge", headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 360 } });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4182/", { waitUntil: "networkidle" });
  await page.screenshot({ path: output, fullPage: false });
  await context.close();
  console.log(`Captured ${output}`);
} finally {
  await browser?.close();
  server.close();
}
