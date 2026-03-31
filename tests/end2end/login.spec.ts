import { expect } from "@playwright/test";
import { test } from "../../fixtures/basePage";

test.describe("Login", () => {
  test("successful login elements", async ({ loginPage, page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    //expect page to have elements
    //await page.pause();
    await expect.soft(loginPage.logOut).toBeVisible();
  });

  test("successful login check", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    //expect page to have elements
    await expect(page.getByText("welcome maverick25")).toBeVisible();

    // await page.pause();
  });

  test("successful logout", async ({ loginPage, page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    //expect page to have elements
    await expect.soft(page.getByText("welcome maverick25")).toBeVisible();
    await page.pause();
    await loginPage.logOut.click();
    await expect(loginPage.logIn).toBeVisible();

    // await page.pause();
  });
});
