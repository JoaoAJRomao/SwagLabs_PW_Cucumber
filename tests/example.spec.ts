import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Swag Labs");
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  // Click the get started link.
  await page.locator("input[data-test=\"username\"]").fill("standard_user");
  await page.locator("input[data-test=\"password\"]").fill("secret_sauce");
  await page.locator("input[data-test=\"login-button\"]").click();

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
