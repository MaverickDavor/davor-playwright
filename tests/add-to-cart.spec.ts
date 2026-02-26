import { test, expect, Page, Locator } from "@playwright/test";
import { CartPage } from "../pages/cart.page";
import { AddToCartPage } from "../pages/add-to-cart.page";

test.describe("Adding to Cart second", () => {
  test("add to bag", async ({ page }) => {
    const addToCart = new AddToCartPage(page);
    const cart = new CartPage(page);
    await addToCart.goto(page);
    // Expect a link "to be named" a substring.
    await cart.addNexus.click({ force: true });
    page.on("dialog", async (dialog) => {
      expect(dialog.message()).toContain("Product added");
      await dialog.accept();
    });
    await cart.addCartButton.click();
    await cart.navCart.click();
    await expect(cart.nexusVisible).toBeVisible();
  });
});
