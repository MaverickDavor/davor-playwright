import { expect } from "@playwright/test";
import { devices } from "../../data/home.data";
import { test } from "../../fixtures/basePage";
test.describe("Visual elements check", () => {
  test("whole page", async ({ homePage, page }) => {
    await homePage.goto();
    //this hides vertical scrollbar
    await page.addStyleTag({
      content: `html, body { overflow: hidden !important; }`,
    });
    await expect(page).toHaveScreenshot({
      //fullPage: true,
      //maxDiffPixelRatio: 0.0001,
      mask: [homePage.slider],
    });
  });

  test("sidebar visual", async ({ homePage, page }) => {
    await homePage.goto();
    await page.addStyleTag({
      content: `html, body { overflow: hidden !important; } 
      * { box-shadow: none !important; text-shadow: none !important; }`,
    });
    await expect(homePage.sidebar).toHaveScreenshot();
  });

  test("navbar visual", async ({ homePage, page }) => {
    await homePage.goto();
    await page.addStyleTag({
      content: `html, body { overflow: hidden !important; }
      * { box-shadow: none !important; text-shadow: none !important; }`,
    });
    await expect(homePage.navbar).toHaveScreenshot();
  });

  test("body visual", async ({ homePage, page }) => {
    await homePage.goto();
    await page.addStyleTag({
      content: `html, body { overflow: hidden !important; }
      * { box-shadow: none !important; text-shadow: none !important; }`,
    });
    await expect(homePage.body).toHaveScreenshot();
  });

  test("footer visual", async ({ homePage, page }) => {
    await homePage.goto();
    await page.addStyleTag({
      content: `html, body { overflow: hidden !important; }
      * { box-shadow: none !important; text-shadow: none !important; }`,
    });
    await expect(homePage.footer).toHaveScreenshot();
  });
});
