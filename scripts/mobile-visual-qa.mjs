import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { join } from "path";

const BASE = process.env.QA_BASE_URL ?? "http://localhost:3000";
const WIDTHS = [320, 360, 375, 390, 412, 430];
const PAGES = [
  { name: "homepage", path: "/" },
  { name: "cipherfab", path: "/work/cipherfab" },
  { name: "everoot", path: "/work/everoot-international" },
  { name: "jaya", path: "/work/jaya-space" },
  { name: "yoga", path: "/work/yoga-with-shabana" },
];

const outDir = join(process.cwd(), ".qa-screenshots");
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  channel: "msedge",
});
const results = [];

for (const width of WIDTHS) {
  const context = await browser.newContext({
    viewport: { width, height: 812 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  for (const route of PAGES) {
    const url = `${BASE}${route.path}${route.path === "/" ? "#contact" : ""}`;
    const targetUrl =
      route.path === "/" ? `${BASE}/` : `${BASE}${route.path}`;

    await page.goto(targetUrl, { waitUntil: "networkidle", timeout: 60000 });

    if (route.path === "/") {
      await page.evaluate(() => {
        document.querySelector("#contact")?.scrollIntoView({ block: "start" });
      });
      await page.waitForTimeout(400);
    }

    const metrics = await page.evaluate(() => {
      const doc = document.documentElement;
      const body = document.body;
      const overflowX =
        Math.max(doc.scrollWidth, body.scrollWidth) -
        Math.min(doc.clientWidth, window.innerWidth);
      const sections = ["#work", "#contact", "h1"].map((sel) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          sel,
          top: Math.round(r.top),
          height: Math.round(r.height),
          width: Math.round(r.width),
        };
      });
      return {
        overflowX: Math.round(overflowX),
        innerWidth: window.innerWidth,
        scrollWidth: Math.max(doc.scrollWidth, body.scrollWidth),
      };
    });

    const shotPath = join(
      outDir,
      `${route.name}-${width}.png`,
    );
    await page.screenshot({ path: shotPath, fullPage: false });

    results.push({
      width,
      page: route.name,
      overflowX: metrics.overflowX,
      scrollWidth: metrics.scrollWidth,
      ok: metrics.overflowX <= 1,
    });
  }

  await context.close();
}

await browser.close();

const failures = results.filter((r) => !r.ok);
console.log(JSON.stringify({ total: results.length, failures, results }, null, 2));
