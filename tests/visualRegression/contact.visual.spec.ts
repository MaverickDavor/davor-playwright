import { expect } from "@playwright/test";
import { test } from "../../fixtures/basePage";

test.describe("Visual elements check Contact", () => {
  test("dialog visual", async ({ contactPage, page }) => {
    await contactPage.goto();
    //this hides vertical scrollbar
    await page.addStyleTag({
      content: `html, body { overflow: hidden !important; }`,
    });
    await expect(contactPage.dialogBody).toHaveScreenshot();
  });
});
