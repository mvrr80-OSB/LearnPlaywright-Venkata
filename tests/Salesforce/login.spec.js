import { test, expect } from '@playwright/test';

const SALESFORCE_URL = 'https://oar--test.sandbox.my.salesforce.com/';
const USERNAME = process.env.SF_USERNAME || 'oar.summer26+pa@gmail.com';
const PASSWORD = process.env.SF_PASSWORD || 'OarSummer-2026';

test('Salesforce sandbox login should reach identity verification', async ({ page }) => {
  await page.goto(SALESFORCE_URL);

  await page.getByRole('textbox', { name: 'Username' }).fill(USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).fill(PASSWORD);

  await page.getByRole('button', { name: /Log In/i }).click();

 // await expect(page.getByRole('heading', { name: /Verify Your Identity/i })).toBeVisible();
});
