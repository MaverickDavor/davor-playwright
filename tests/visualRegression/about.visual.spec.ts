import { expect } from "@playwright/test";
import { test } from "../../fixtures/basePage";

test.describe("Visual elements check About", () => {
  test("about visual", async ({ aboutPage, page }) => {
    await aboutPage.goto();
    await aboutPage.navAbout.click();
    //this hides vertical scrollbar
    await page.addStyleTag({
      content: `html, body { overflow: hidden !important; }`,
    });
    await expect(aboutPage.videoModal).toHaveScreenshot();
  });
});
