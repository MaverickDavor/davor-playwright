import { expect } from "@playwright/test";
//import { LoginPage } from "../pages/login.page";
import { test } from "../../fixtures/basePage";

test.describe("Login", () => {
  test("successful login", async ({ loginPage }) => {
    await loginPage.goto();
    //expect page to have elements
    await expect.soft(loginPage.loginTitle).toBeVisible();
    await expect.soft(loginPage.titleUsername).toBeVisible();
    await expect.soft(loginPage.fieldUsername).toBeVisible();
    await expect.soft(loginPage.titlePassword).toBeVisible();
    await expect.soft(loginPage.fieldPassword).toBeVisible();

    //expect page to have buttons
    await expect.soft(loginPage.buttonClose).toBeVisible();
    await expect(loginPage.buttonLogin).toBeVisible();
    // await page.pause();
  });
});
