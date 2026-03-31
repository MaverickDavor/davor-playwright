import { expect } from "@playwright/test";
//import { CartPage } from "../pages/cart.page";
//import { AddToCartPage } from "../pages/add-to-cart.page";
import { test } from "../../fixtures/basePage";
import { phoneInCart } from "../../data/cart-mock.data";

test.describe("Mocking cart data", () => {
  test("phone mocked in cart", async ({ addToCartPage, cartPage, page }) => {
    const phoneModified = { ...phoneInCart, price: 900.0 };

    await page.route("**/api.demoblaze.com/view", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(phoneModified),
      });
    });

    await addToCartPage.goto(page);
    // Expect a link "to be named" a substring.
    await cartPage.addNexus.click({ force: true });
    page.on("dialog", async (dialog) => {
      expect(dialog.message()).toContain("Product added");
      await dialog.accept();
    });
    await cartPage.addCartButton.click();
    await cartPage.navCart.click();
    //await page.pause();
    await expect(cartPage.modifiedPrice).toBeVisible();
  });
});
