import { expect } from "@playwright/test";
import { CartPage } from "../pages/cart.page";
import { test } from "../fixtures/basePage";

test.beforeEach("Open start URL", async ({ cartPage, page }) => {
  await cartPage.goto(page);
});

test.describe("Cart Elements check", () => {
  test("has cart", async ({ cartPage }) => {
    await cartPage.navCart.click();
    // Expect a cart to have columns.
    await expect.soft(cartPage.columnPic).toBeVisible();
    await expect.soft(cartPage.columnTitle).toBeVisible();
    await expect.soft(cartPage.columnPrice).toBeVisible();
    await expect.soft(cartPage.columnX).toBeVisible();
    // Expect a page to have button.
    await expect(cartPage.buttonPlaceOrder).toBeVisible();
  });

  test("has checkout data", async ({ cartPage, page }) => {
    await cartPage.navCart.click();
    await cartPage.buttonPlaceOrder.click();
    //await page.pause();
    // Expect a cart to have columns.
    await expect.soft(cartPage.cartName).toBeVisible();
    await expect.soft(cartPage.cartNameField).toBeVisible();
    await expect.soft(cartPage.cartCountry).toBeVisible();
    await expect.soft(cartPage.cartCountryField).toBeVisible();
    await expect.soft(cartPage.cartCity).toBeVisible();
    await expect.soft(cartPage.cartCityField).toBeVisible();
    await expect.soft(cartPage.cartCC).toBeVisible();
    await expect.soft(cartPage.cartCCField).toBeVisible();
    await expect.soft(cartPage.cartMonth).toBeVisible();
    await expect.soft(cartPage.cartMonthField).toBeVisible();
    await expect.soft(cartPage.cartYear).toBeVisible();
    await expect.soft(cartPage.cartYearField).toBeVisible();
    //Expect to have close and purchase buttons
    await expect.soft(cartPage.cartCloseButton).toBeVisible();
    await expect(cartPage.cartPurchaseButton).toBeVisible();
  });
});
