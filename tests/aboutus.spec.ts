import { test, expect } from "@playwright/test";

test.beforeEach("Open start URL", async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto("https://www.demoblaze.com/index.html");
});

test("has about us", async ({ page }) => {
  //await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "About us" }).click();
  // Expect a form to have input fields.
  await expect.soft(page.locator(".vjs-poster")).toBeVisible();
  await expect(
    page.locator("#videoModal").getByText("Close", { exact: true }),
  ).toBeVisible();

  //await page.pause();
});
