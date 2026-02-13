import { test, expect } from "@playwright/test";

test("has login", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Log in" }).click();
  //expect page to have elements
  await expect
    .soft(page.getByRole("heading", { name: "Log in" }))
    .toBeVisible();
  await expect
    .soft(page.getByLabel("Log in").getByText("Username:"))
    .toBeVisible();
  await expect.soft(page.locator("#loginusername")).toBeVisible();
  await expect
    .soft(page.getByLabel("Log in").getByText("Password:"))
    .toBeVisible();
  await expect.soft(page.locator("#loginpassword")).toBeVisible();

  //expect page to have buttons
  await expect.soft(page.getByLabel("Log in").getByText("Close")).toBeVisible();
  await expect(page.getByRole("button", { name: "Log in" })).toBeVisible();
  // await page.pause();
});
