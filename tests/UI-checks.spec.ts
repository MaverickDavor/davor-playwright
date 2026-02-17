import { test, expect } from "@playwright/test";

test.beforeEach("Open start URL", async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto("https://www.demoblaze.com/index.html");
});

test.describe("CSS check", () => {
  test("has color", async ({ page }) => {
    await expect
      .soft(page.getByText("PRODUCT STORE Home (current)"))
      .toHaveCSS("color", "rgb(134, 134, 136)");
  });

  test("has font", async ({ page }) => {
    //await page.pause();
    await expect
      .soft(page.locator("#tbodyid"))
      .toHaveCSS("font-family", "LatoWeb");
  });

  //not working - is it possible to check class name? Is there any purpose
  test("has class", async ({ page }) => {
    await expect
      .soft(page.getByText("PRODUCT STORE Home (current)"))
      .toHaveCSS("class", "navbar-collapse");
  });

  test("has margin", async ({ page }) => {
    //await page.pause();
    const locator = page.getByRole("link", { name: "PRODUCT STORE" });
    await expect.soft(locator).toHaveCSS("margin-right", "320px");
    await expect.soft(locator).toHaveCSS("line-height", "30px");
  });
});
