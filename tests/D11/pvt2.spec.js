import { test, expect } from '@playwright/test';
import sites from './sites.json';

const filteredSites = sites.sites.filter((site) => site !== 'gsb');

filteredSites.forEach((site) => {

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
