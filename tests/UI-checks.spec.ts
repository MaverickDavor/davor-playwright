import { test, expect, Page, Locator } from "@playwright/test";

export class UICheckPage {
  readonly page: Page;
  readonly colorCheck: Locator;
  readonly fontCheck: Locator;
  readonly marginCheck: Locator;

  constructor(page: Page) {
    this.page = page;
    this.colorCheck = page.getByText("PRODUCT STORE Home (current)");
    this.fontCheck = page.locator("#tbodyid");
    this.marginCheck = page.getByRole("link", { name: "PRODUCT STORE" });
  }

  async goto() {
    await this.page.goto("https://www.demoblaze.com/index.html");
  }
}

test.beforeEach("Open start URL", async ({ page }) => {
  const UICheck = new UICheckPage(page);
  await UICheck.goto();
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
