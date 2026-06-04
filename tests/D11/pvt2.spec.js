import { test, expect } from '@playwright/test';
import sites from './sites.json';

const filteredSites = sites.sites.filter((site) => site !== 'gsb');

filteredSites.forEach((site) => {
  //const siteUrl = `https://nginx-canary-${site}.govcms10.amazee.io`;
  const siteUrl = `https://nginx-master-${site}.govcms5.amazee.io`;

//test.describe.parallel(`Tests for site: ${site}`, () => {
    // Test home page
    test(`Verify site homepage: ${site}`, async ({ page }, testInfo) => {
      const response = await page.goto(siteUrl, { waitUntil: 'networkidle' })
      
      if (!response) {
        throw new Error(`Failed to load ${siteUrl}`);
      }

      const status = response.status();

      if (status === 401) {
        console.warn(`Shield detected for site: ${site} - Skipping visual test.`);
      }

      // expect(status).toBe(200); 

     await page.screenshot({
        path: testInfo.outputPath(`Home page ${site}.png`),
        fullPage: true,
      });

    });

    // Test search page
    test(`Verify site search page: ${site}`, async ({ page }, testInfo) => {
      const response = await page.goto(siteUrl + '/search?keys=test');
      
      if (response) {
        const status = response.status();

        if (status === 401) {
          console.warn(`Shield detected for site: ${site} - Skipping visual test.`);
        }

        // expect(status).toBe(200); 

        await page.screenshot({
        path: testInfo.outputPath(`Search page ${site}.png`),
        fullPage: true,
      });
      } else {
        console.log(`Test failed: ${site} - No response received.`);
      }
    });

    // Test user login page
    test(`Verify site user login page: ${site}`, async ({ page }, testInfo) => {
      const response = await page.goto(siteUrl + '/user');
      
      if (response) {
        const status = response.status();

        if (status === 401) {
          console.warn(`Shield detected for site: ${site} - Skipping visual test.`);
        }

        // expect(status).toBe(200); 

        await page.screenshot({
        path: testInfo.outputPath(`Login page ${site}.png`),
        fullPage: true,
      });
      } else {
        console.log(`Test failed: ${site} - No response received.`);
      }
    });

  });

//});