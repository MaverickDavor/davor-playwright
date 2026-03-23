import { expect } from "@playwright/test";
//import { LoginPage } from "../pages/login.page";
import { test } from "../../fixtures/basePage";

test.describe("Login", () => {
  test.only("successful login elements", async ({ loginPage, page }) => {
    await loginPage.goto();
    //expect page to have elements
    await expect.soft(loginPage.loginTitle).toBeVisible();
    await expect.soft(loginPage.titleUsername).toBeVisible();
    await expect.soft(loginPage.fieldUsername).toBeVisible();
    await expect.soft(loginPage.titlePassword).toBeVisible();
    await expect.soft(loginPage.fieldPassword).toBeVisible();
    await page.pause();
    //expect page to have buttons
    await expect.soft(loginPage.buttonClose).toBeVisible();
    await expect(loginPage.buttonLogin).toBeVisible();
    // await page.pause();
  });

  test("successful login check", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    //expect page to have elements
    await expect(page.getByText("welcome vnovacki")).toBeVisible();

    // await page.pause();
  });
});
