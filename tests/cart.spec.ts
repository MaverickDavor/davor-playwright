import { test, expect, Page, Locator } from "@playwright/test";
import { CartPage } from "../pages/cart.page";

test.beforeEach("Open start URL", async ({ page }) => {
  const cart = new CartPage(page);
  await cart.goto();
});

test.describe("Adding to Cart second", () => {
  test("add to bag", async ({ page }) => {
    const cart = new CartPage(page);

    // Expect a link "to be named" a substring.
    await cart.addNexus.click();
    page.on("dialog", async (dialog) => {
      expect(dialog.message()).toContain("Product added");
      await dialog.accept();
    });
    await cart.addCartButton.click();
    await cart.navCart.click();
    await expect(cart.nexusVisible).toBeVisible();
  });
});

test.describe("Cart Elements check", () => {
  test("has cart", async ({ page }) => {
    const cart = new CartPage(page);
    await cart.navCart.click();
    // Expect a cart to have columns.
    await expect.soft(cart.columnPic).toBeVisible();
    await expect.soft(cart.columnTitle).toBeVisible();
    await expect.soft(cart.columnPrice).toBeVisible();
    await expect.soft(cart.columnX).toBeVisible();
    // Expect a page to have button.
    await expect(cart.buttonPlaceOrder).toBeVisible();
  });

  test("has checkout data", async ({ page }) => {
    const cart = new CartPage(page);
    await cart.navCart.click();
    await cart.buttonPlaceOrder.click();
    //await page.pause();
    // Expect a cart to have columns.
    await expect.soft(cart.cartName).toBeVisible();
    await expect.soft(cart.cartNameField).toBeVisible();
    await expect.soft(cart.cartCountry).toBeVisible();
    await expect.soft(cart.cartCountryField).toBeVisible();
    await expect.soft(cart.cartCity).toBeVisible();
    await expect.soft(cart.cartCityField).toBeVisible();
    await expect.soft(cart.cartCC).toBeVisible();
    await expect.soft(cart.cartCCField).toBeVisible();
    await expect.soft(cart.cartMonth).toBeVisible();
    await expect.soft(cart.cartMonthField).toBeVisible();
    await expect.soft(cart.cartYear).toBeVisible();
    await expect.soft(cart.cartYearField).toBeVisible();
    //Expect to have close and purchase buttons
    await expect.soft(cart.cartCloseButton).toBeVisible();
    await expect(cart.cartPurchaseButton).toBeVisible();
  });
});
