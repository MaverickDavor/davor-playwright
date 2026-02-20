import { test, expect, Page, Locator } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly addNexus: Locator;
  readonly addCartButton: Locator;
  readonly navCart: Locator;
  readonly nexusVisible: Locator;
  readonly columnPic: Locator;
  readonly columnTitle: Locator;
  readonly columnPrice: Locator;
  readonly columnX: Locator;
  readonly buttonPlaceOrder: Locator;
  readonly cartName: Locator;
  readonly cartNameField: Locator;
  readonly cartCountry: Locator;
  readonly cartCountryField: Locator;
  readonly cartCity: Locator;
  readonly cartCityField: Locator;
  readonly cartCC: Locator;
  readonly cartCCField: Locator;
  readonly cartMonth: Locator;
  readonly cartMonthField: Locator;
  readonly cartYear: Locator;
  readonly cartYearField: Locator;
  readonly cartCloseButton: Locator;
  readonly cartPurchaseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNexus = page.getByRole("link", { name: "Nexus" });
    this.addCartButton = page.getByRole("link", { name: "Add to cart" });
    this.navCart = page.getByRole("link", { name: "Cart", exact: true });
    this.nexusVisible = page.getByRole("cell", { name: "Nexus" });
    this.columnPic = page.getByRole("columnheader", { name: "Pic" });
    this.columnTitle = page.getByRole("columnheader", { name: "Title" });
    this.columnPrice = page.getByRole("columnheader", { name: "Price" });
    this.columnX = page.getByRole("columnheader", { name: "x" });
    this.buttonPlaceOrder = page.getByRole("button", { name: "Place Order" });
    this.cartName = page.getByText("Name:", { exact: true });
    this.cartNameField = page.getByRole("textbox", { name: "Total: Name:" });
    this.cartCountry = page.getByText("Country:");
    this.cartCountryField = page.getByRole("textbox", { name: "Country:" });
    this.cartCity = page.getByText("City:");
    this.cartCityField = page.getByRole("textbox", { name: "City:" });
    this.cartCC = page.getByText("Credit card:");
    this.cartCCField = page.getByRole("textbox", { name: "Credit card:" });
    this.cartMonth = page.getByText("Month:");
    this.cartMonthField = page.getByRole("textbox", { name: "Month:" });
    this.cartYear = page.getByText("Year:");
    this.cartYearField = page.getByRole("textbox", { name: "Year:" });
    this.cartCloseButton = page.getByLabel("Place order").getByText("Close");
    this.cartPurchaseButton = page.getByRole("button", { name: "Purchase" });
  }

  async goto() {
    await this.page.goto("https://www.demoblaze.com/index.html");
  }
}

test.beforeEach("Open start URL", async ({ page }) => {
  const Cart = new CartPage(page);
  await Cart.goto();
});

test.describe("Adding to Cart second", () => {
  test("add to bag", async ({ page }) => {
    const Cart = new CartPage(page);

    // Expect a link "to be named" a substring.
    await Cart.addNexus.click();
    page.on("dialog", async (dialog) => {
      expect(dialog.message()).toContain("Product added");
      await dialog.accept();
    });
    await Cart.addCartButton.click();
    await Cart.navCart.click();
    await expect(Cart.nexusVisible).toBeVisible();
  });
});

test.describe("Cart Elements check", () => {
  test("has cart", async ({ page }) => {
    const Cart = new CartPage(page);
    await Cart.navCart.click();
    // Expect a cart to have columns.
    await expect.soft(Cart.columnPic).toBeVisible();
    await expect.soft(Cart.columnTitle).toBeVisible();
    await expect.soft(Cart.columnPrice).toBeVisible();
    await expect.soft(Cart.columnX).toBeVisible();
    // Expect a page to have button.
    await expect(Cart.buttonPlaceOrder).toBeVisible();
  });

  test("has checkout data", async ({ page }) => {
    const Cart = new CartPage(page);
    await Cart.navCart.click();
    await Cart.buttonPlaceOrder.click();
    //await page.pause();
    // Expect a cart to have columns.
    await expect.soft(Cart.cartName).toBeVisible();
    await expect.soft(Cart.cartNameField).toBeVisible();
    await expect.soft(Cart.cartCountry).toBeVisible();
    await expect.soft(Cart.cartCountryField).toBeVisible();
    await expect.soft(Cart.cartCity).toBeVisible();
    await expect.soft(Cart.cartCityField).toBeVisible();
    await expect.soft(Cart.cartCC).toBeVisible();
    await expect.soft(Cart.cartCCField).toBeVisible();
    await expect.soft(Cart.cartMonth).toBeVisible();
    await expect.soft(Cart.cartMonthField).toBeVisible();
    await expect.soft(Cart.cartYear).toBeVisible();
    await expect.soft(Cart.cartYearField).toBeVisible();
    //Expect to have close and purchase buttons
    await expect.soft(Cart.cartCloseButton).toBeVisible();
    await expect(Cart.cartPurchaseButton).toBeVisible();
  });
});
