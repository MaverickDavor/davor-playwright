import { test, expect, Locator, Page } from "@playwright/test";
import { AboutPage } from "../pages/about-us.page";

// pitati za POM i beforeEach
test.describe("about us", () => {
  test.beforeEach("Open start URL", async ({ page }) => {
    const about = new AboutPage(page);
    await about.goto();
    await about.navAbout.click({ force: true });
  });

  test("has about us", async ({ page }) => {
    const about = new AboutPage(page);

    await expect.soft(about.poster).toBeVisible();
    await expect(about.closeButton).toBeVisible();

    //await page.pause();
  });
});
