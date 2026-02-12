import { test, expect } from "@playwright/test";

test("has signup", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  await page.getByRole("link", { name: "Sign up" }).click();
  //expect page to have elements
  page.getByRole("heading", { name: "Sign up" });
  page.getByLabel("Sign up").getByText("Username:");
  page.getByRole("textbox", { name: "Username:" });
  page.getByLabel("Sign up").getByText("Password:");
  page.getByRole("textbox", { name: "Password:" });

  //expect page to have buttons
  page.getByLabel("Sign up").getByText("Close");
  page.getByRole("button", { name: "Sign up" });
  //await page.pause();
});
