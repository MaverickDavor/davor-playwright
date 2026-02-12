import { test, expect } from "@playwright/test";

test("has signup", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  await page.getByRole("link", { name: "Sign up" }).click();
  //expect page to have elements
  await expect(page.getByRole("heading", { name: "Sign up" })).toBeVisible();
  await expect(page.getByLabel("Sign up").getByText("Username:")).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Username:" })).toBeVisible();
  await expect(page.getByLabel("Sign up").getByText("Password:")).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Password:" })).toBeVisible();

  //expect page to have buttons
  await expect(page.getByLabel("Sign up").getByText("Close")).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign up" })).toBeVisible();
  //await page.pause();
});
