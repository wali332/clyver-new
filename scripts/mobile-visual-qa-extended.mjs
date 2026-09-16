import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { join } from "path";

const BASE = process.env.QA_BASE_URL ?? "http://localhost:3000";
const WIDTHS = [320, 375, 430];
const outDir = join(process.cwd(), ".qa-screenshots");
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true, channel: "msedge" });
const report = [];

for (const width of WIDTHS) {
  const context = await browser.newContext({
    viewport: { width, height: 812 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  const failedImages = [];

  page.on("response", (res) => {
    if (res.request().resourceType() === "image" && res.status() >= 400) {
      failedImages.push({ url: res.url(), status: res.status() });
    }
  });

  await page.goto(`${BASE}/`, { waitUntil: "networkidle", timeout: 60000 });

  await page.screenshot({ path: join(outDir, `home-top-${width}.png`) });

  await page.evaluate(() => document.querySelector("#work")?.scrollIntoView({ block: "start" }));
  await page.waitForTimeout(300);
  await page.screenshot({ path: join(outDir, `home-work-${width}.png`) });

  await page.evaluate(() => document.querySelector("#contact")?.scrollIntoView({ block: "start" }));
  await page.waitForTimeout(300);
  await page.screenshot({ path: join(outDir, `home-contact-${width}.png`) });

  report.push({ width, section: "homepage", failedImages: [...failedImages] });

  for (const slug of [
    "cipherfab",
    "everoot-international",
    "jaya-space",
    "yoga-with-shabana",
  ]) {
    failedImages.length = 0;
    await page.goto(`${BASE}/work/${slug}`, {
      waitUntil: "networkidle",
      timeout: 60000,
    });
    await page.screenshot({ path: join(outDir, `${slug}-hero-${width}.png`) });
    report.push({
      width,
      section: slug,
      failedImages: [...failedImages],
      heroH1: await page.locator("h1").boundingBox(),
    });
  }

  await context.close();
}

await browser.close();
console.log(JSON.stringify(report, null, 2));
