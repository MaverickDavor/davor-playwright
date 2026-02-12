import { test, expect } from "@playwright/test";

test("has login", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Log in" }).click();
  //expect page to have elements
  page.getByRole("heading", { name: "Log in" });
  page.getByLabel("Log in").getByText("Username:");
  page.locator("#loginusername");
  page.getByLabel("Log in").getByText("Password:");
  page.locator("#loginpassword");

  //expect page to have buttons
  page.getByLabel("Log in").getByText("Close");
  page.getByRole("button", { name: "Log in" });
  // await page.pause();
});
