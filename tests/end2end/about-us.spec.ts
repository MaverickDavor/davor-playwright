import { test } from "../../fixtures/basePage";
import { expect } from "@playwright/test";
//import { AboutPage } from "../pages/about-us.page";

// pitati za POM i beforeEach

// test("testni fixture", async ({ aboutPage, page }) => {
//   await aboutPage.goto();
//   await aboutPage.navAbout.click();
//   await expect.soft(aboutPage.poster).toBeVisible();
// });

test.describe("about us", () => {
  test.beforeEach("Open start URL", async ({ aboutPage, page }) => {
    await aboutPage.goto();
    await aboutPage.navAbout.click({ force: true });
  });

  test("has about us", async ({ aboutPage, page }) => {
    await expect.soft(aboutPage.poster).toBeVisible();
    await expect(aboutPage.closeButton).toBeVisible();

    //await page.pause();
  });
});
