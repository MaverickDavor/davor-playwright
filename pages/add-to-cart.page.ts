import { Locator, Page } from "@playwright/test";
import { HomePage } from "./home.page";

export class AddToCartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(page: Page) {
    const homePage = new HomePage(page);
    await homePage.goto();
  }
}
