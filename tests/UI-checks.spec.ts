import { expect } from "@playwright/test";
import { test } from "../fixtures/basePage";

test.beforeEach("Open start URL", async ({ uiCheckPage, page }) => {
  await uiCheckPage.goto(page);
});

test.describe("CSS check", () => {
  test("has color", async ({ uiCheckPage }) => {
    await expect
      .soft(uiCheckPage.colorCheck)
      .toHaveCSS("color", "rgb(134, 134, 136)");
  });

  test("has font", async ({ uiCheckPage }) => {
    await expect
      .soft(uiCheckPage.fontCheck)
      .toHaveCSS("font-family", "LatoWeb");
  });

  test("has margin", async ({ uiCheckPage }) => {
    await expect
      .soft(uiCheckPage.marginCheck)
      .toHaveCSS("margin-right", "320px");
    await expect.soft(uiCheckPage.marginCheck).toHaveCSS("line-height", "30px");
  });
});
