import { test, expect } from '@playwright/test';
import data from "../../testdata/login.json"

test('create blog article', async ({ page }) => {
  await page.goto('/user');
  await page.locator('//input[@autocomplete="username"]').fill(data.Username)
  await page.locator('//input[@autocomplete="current-password"]').fill(data.Password)
  await page .locator('//input[@type="submit"]').click
  

  });
