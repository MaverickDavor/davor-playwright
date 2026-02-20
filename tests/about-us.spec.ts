import { test, expect, Locator, Page } from "@playwright/test";

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

// pitati za POM i beforeEach
test.describe("about us", () => {
  test.beforeEach("Open start URL", async ({ page }) => {
    const About = new AboutPage(page);
    await About.goto();
    await About.navAbout.click();
  });

  test("has about us", async ({ page }) => {
    //Jel moram ponovno definirati model?
    const About = new AboutPage(page);

    await expect.soft(About.poster).toBeVisible();
    await expect(About.closeButton).toBeVisible();

    //await page.pause();
  });
});
