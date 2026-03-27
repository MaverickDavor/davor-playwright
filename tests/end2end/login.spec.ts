import { expect } from "@playwright/test";
//import { LoginPage } from "../pages/login.page";
import { test } from "../../fixtures/basePage";

test.describe("Login", () => {
  test("successful login elements", async ({ loginPage, page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    //expect page to have elements
    await expect.soft(loginPage.loginTitle).toBeHidden();
    await expect.soft(loginPage.titleUsername).toBeHidden();
    await expect.soft(loginPage.fieldUsername).toBeHidden();
    await expect.soft(loginPage.titlePassword).toBeHidden();
    await expect.soft(loginPage.fieldPassword).toBeHidden();
    //expect page to have buttons
    await expect.soft(loginPage.buttonClose).toBeHidden();
    await expect(loginPage.buttonLogin).toBeHidden();
    // await page.pause();
  });

  test.only("successful login check", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    //expect page to have elements
    await expect(page.getByText("welcome vnovacki")).toBeVisible();

    // await page.pause();
  });
});
