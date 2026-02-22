import { test, expect } from '@playwright/test';

// check whether page has title or not
test('has title', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com');
  await page.getByRole('button', { name: 'Consent' }).click();
  await expect(page).toHaveTitle(/Automation Testing Practice Website for QA and Developers | UI and API/);
});

// navigate to web inputs page
test('Navigate to Web Inputs page', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com');
    await page.getByRole('button', { name: 'Consent' }).click();
    const webInputsButton = await page.locator('.card').filter({ hasText: 'Web Inputs' }).getByRole('link', { name: 'Try it out' });
    await webInputsButton.click();
    expect(page.url()).toContain('/inputs');
});

//navigate to test login page
test('Navigate to Test Login Page', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com');
    await page.getByRole('button', { name: 'Consent' }).click();
    const testLoginPageLink = await page.locator('.card').filter({ hasText: 'Test Login Page' }).getByRole('link', { name: 'Try it out' });
    await testLoginPageLink.click();
    expect(page.url()).toContain('/login');
});

// navigate to test register page
test('Navigate to Test Regigster Page', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com');
    await page.getByRole('button', { name: 'Consent' }).click();
    const testRegisterPageLink = await page.locator('.card').filter({ hasText: 'Test Register Page' }).getByRole('link', { name: 'Try it out' });
    await testRegisterPageLink.click();
    expect(page.url()).toContain('/register');

});

// navigate to forgot password form
test('Navigate to Forgot Password form', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com');
    await page.getByRole('button', { name: 'Consent' }).click();
    const forgotPasswordFormLink = await page.locator('.card').filter({ hasText: 'Forgot Password Form' }).getByRole('link', { name: 'Try it out' });
    await forgotPasswordFormLink.click();
    expect(page.url()).toContain('/forgot-password');
});

// navigate to one time password form
test('Navigate to One Time Password form', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com');
    await page.getByRole('button', { name: 'Consent' }).click();
    const oneTimePasswordFormLink = await page.locator('.card').filter({ hasText: 'OTP: One Time Password'}).getByRole('link', { name: 'Try it out' });
    await oneTimePasswordFormLink.click();
    expect(page.url()).toContain('/otp-login');
});

