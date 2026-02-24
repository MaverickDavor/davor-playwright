import { Locator, Page } from "@playwright/test";
import { HomePage } from "./home.page";

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

  async goto(page: Page) {
    const homePage = new HomePage(page);
    await homePage.goto();
  }
}
