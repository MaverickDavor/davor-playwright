import { Locator, Page } from "@playwright/test";

export class AboutPage {
  readonly page: Page;
  readonly poster: Locator;
  readonly closeButton: Locator;
  readonly navAbout: Locator;

  constructor(page: Page) {
    this.page = page;
    this.poster = page.locator(".vjs-poster");
    this.closeButton = page
      .locator("#videoModal")
      .getByText("Close", { exact: true });
    this.navAbout = page.getByRole("link", { name: "About us" });
  }

  async goto() {
    await this.page.goto("https://www.demoblaze.com/index.html");
  }
}
