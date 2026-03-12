import { expect } from "@playwright/test";
import { test } from "../../fixtures/basePage";

test.describe("Visual elements check Contact", () => {
  test("dialog visual", async ({ contactPage, page }) => {
    await contactPage.goto();
    await page.pause();
    //this hides vertical scrollbar
    await page.addStyleTag({
      content: `html, body { overflow: hidden !important; } * { box-shadow: none !important; text-shadow: none !important; }`,
    });
    await expect(contactPage.dialogBody).toHaveScreenshot();
  });
});
