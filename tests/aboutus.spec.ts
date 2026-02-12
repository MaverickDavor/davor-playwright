import { test, expect } from "@playwright/test";

test("has about us", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "About us" }).click();
  // Expect a form to have input fields.
  page.getByRole("button", { name: "Play Video" });
  page.locator("#videoModal").getByText("Close", { exact: true });

  //await page.pause();
});
