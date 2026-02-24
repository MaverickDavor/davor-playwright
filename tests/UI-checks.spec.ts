import { test, expect, Page, Locator } from "@playwright/test";
import { UICheckPage } from "../pages/UI-checks.page";

test.beforeEach("Open start URL", async ({ page }) => {
  const UICheck = new UICheckPage(page);
  await UICheck.goto(page);
});

test.describe("CSS check", () => {
  test("has color", async ({ page }) => {
    const UICheck = new UICheckPage(page);
    await expect
      .soft(UICheck.colorCheck)
      .toHaveCSS("color", "rgb(134, 134, 136)");
  });

  test("has font", async ({ page }) => {
    const UICheck = new UICheckPage(page);
    await expect.soft(UICheck.fontCheck).toHaveCSS("font-family", "LatoWeb");
  });

  test("has margin", async ({ page }) => {
    const UICheck = new UICheckPage(page);
    await expect.soft(UICheck.marginCheck).toHaveCSS("margin-right", "320px");
    await expect.soft(UICheck.marginCheck).toHaveCSS("line-height", "30px");
  });
});
