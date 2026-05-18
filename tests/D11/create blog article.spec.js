import { test, expect } from '@playwright/test';

test('Create Blog Article', async ({ page }) => {
// Generates a simple timestamp (e.g., 2024-05-13_14-30-05)
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  await page.goto('/');
  //Enter User Name
  await page.getByRole('textbox', { name: 'Username' }).fill('Site.Admin');
  // Enter PWD
  await page.getByRole('textbox', { name: 'Password' }).fill('Password');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Content', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Content' })).toBeVisible();
  //Click on add content
  await page.getByRole('link', { name: '+Add content' }).click();
  //Verify page title
  await expect(page.getByRole('heading', { name: 'Add content item' })).toBeVisible();
  await page.getByRole('link', { name: 'Blog article' }).click();
  //Verify page title
  await expect(page.getByRole('heading', { name: 'Create Blog article' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Title *' }).fill((timestamp)+'Site Admin - Blog Article');

  await page.getByRole('textbox', { name: 'Rich Text Editor. Editing' }).fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat venenatis augue, non placerat sem lobortis ac. Praesent elementum imperdiet lectus. Pellentesque aliquet tempor sem, id volutpat dui semper vitae. Integer cursus semper enim. Duis porta tortor eget diam posuere porttitor. Sed pellentesque neque in tellus tristique, non porta diam ultrices. Curabitur non neque a lacus commodo pellentesque. Sed a ligula nec est maximus euismod quis eu nisi. Quisque sit amet tempus ante. Nullam eu posuere velit, dictum volutpat metus. Nunc in enim vitae nulla ultrices ultrices ac sit amet tortor. Sed faucibus nisl id tellus commodo, a faucibus nisl accumsan.lla neque, semper eget erat at, commodo pulvinar massa.');
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('button', { name: 'Apply' }).click();
  await expect(page.getByRole('contentinfo', { name: 'Status message' })).toBeVisible();
  await page.getByLabel('Change to').selectOption('published');
  await page.getByRole('button', { name: 'Apply' }).click();
  await expect(page.getByRole('contentinfo', { name: 'Status message' })).toBeVisible();
  await page.getByRole('link', { name: 'Front page' }).click();
  await page.getByRole('button', { name: 'Site.Admin' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
  await page.getByLabel('Main navigation', { exact: true }).getByRole('link', { name: 'Blog' }).click();
  await page.getByRole('link', { name: (timestamp)+'Site Admin - Blog Article', exact: true }).click();
  await expect(page.locator('span')).toBeVisible();
});