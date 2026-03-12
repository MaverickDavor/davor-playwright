import { expect } from "@playwright/test";
//import { CartPage } from "../pages/cart.page";
//import { AddToCartPage } from "../pages/add-to-cart.page";
import { test } from "../../fixtures/basePage";

test.describe("Adding to Cart second", () => {
  test("add to bag", async ({ addToCartPage, cartPage, page }) => {
    await addToCartPage.goto(page);
    // Expect a link "to be named" a substring.
    await cartPage.addNexus.click({ force: true });
    page.on("dialog", async (dialog) => {
      expect(dialog.message()).toContain("Product added");
      await dialog.accept();
    });
    await cartPage.addCartButton.click();
    await cartPage.navCart.click();
    await expect(cartPage.nexusVisible).toBeVisible();
  });
});
