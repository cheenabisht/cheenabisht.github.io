const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 80);
    });
  });
}

async function run() {
  const screenshotsDir = path.join(__dirname, '..', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // 1. Desktop test
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  
  // Hero screenshot
  await page.screenshot({ path: path.join(screenshotsDir, 'desktop-hero.png') });

  // Scroll smoothly down the entire page
  console.log('Scrolling down page...');
  await autoScroll(page);
  await new Promise(r => setTimeout(r, 1000));

  // Full page screenshot while all elements are revealed
  await page.screenshot({ path: path.join(screenshotsDir, 'desktop-full.png'), fullPage: true });

  // Capture each section by scrolling to it
  const sections = ['about', 'work', 'skills', 'education', 'contact'];
  for (const s of sections) {
    const el = await page.$(`#${s}`);
    if (el) {
      await page.evaluate((selector) => {
        const target = document.querySelector(selector);
        if (target) target.scrollIntoView({ behavior: 'instant', block: 'center' });
      }, `#${s}`);
      await new Promise(r => setTimeout(r, 400));
      await el.screenshot({ path: path.join(screenshotsDir, `section-${s}.png`) });
    }
  }

  // 2. Mobile test
  await page.setViewport({ width: 375, height: 812 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await autoScroll(page);
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(screenshotsDir, 'mobile-full.png'), fullPage: true });

  await browser.close();
  console.log('Screenshots refreshed successfully!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
