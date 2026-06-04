import { test, expect } from '@playwright/test';
const urls = require('./urls.json');

function sanitizeUrl(url) {
  return new URL(url).hostname.replace(/\./g, '-');
}

test.describe('Navigate to site', () => {
  for (const url of urls) {
    test(`Homepage ${url}`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto(url);
      await page.screenshot({
        path: testInfo.outputPath(`homepage-${sanitizeUrl(url)}.png`),
        fullPage: true,
      });
    });

    test(`Search ${url}`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto(`${url}/search?keys=test`);
      await page.screenshot({
        path: testInfo.outputPath(`search-${sanitizeUrl(url)}.png`),
        fullPage: true,
      });
    });
  }
});
