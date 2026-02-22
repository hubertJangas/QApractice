import { test, expect } from '@playwright/test';

// check whether page has title or not
test('has title', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com');
  await page.getByRole('button', { name: 'Consent' }).click();
  await expect(page).toHaveTitle(/Automation Testing Practice Website for QA and Developers | UI and API/);
});


