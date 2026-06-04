import { test, expect } from '@playwright/test';
import data from "../../testdata/login.json"


test('test', async ({ page }) => {
  await page.goto('/user');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(data.Username);
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(data.Password);
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page.getByLabel('Status message')).toContainText('Your last login was');
  await page.getByRole('link', { name: 'Content', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Content' })).toBeVisible();
  await page.getByRole('link', { name: '+Add content' }).click();
  await expect(page.getByRole('heading', { name: 'Add content item' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Blog article' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Event' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'FOI' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'News and Media' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Standard page' })).toBeVisible();

  await page.getByRole('button', { name: 'Site.Admin' }).click();
  await expect(page.getByRole('button', { name: 'Site.Admin' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();
  await page.goto('/');
});