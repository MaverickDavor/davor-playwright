import { test, expect, Page, Locator } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

test.describe("Login", () => {
  test("successful login", async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    //expect page to have elements
    await expect.soft(login.loginTitle).toBeVisible();
    await expect.soft(login.titleUsername).toBeVisible();
    await expect.soft(login.fieldUsername).toBeVisible();
    await expect.soft(login.titlePassword).toBeVisible();
    await expect.soft(login.fieldPassword).toBeVisible();

    //expect page to have buttons
    await expect.soft(login.buttonClose).toBeVisible();
    await expect(login.buttonLogin).toBeVisible();
    // await page.pause();
  });
});
