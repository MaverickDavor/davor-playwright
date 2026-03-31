import { Locator, Page } from "@playwright/test";
import { HomePage } from "./home.page";

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
  readonly modifiedPrice: Locator;

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
    this.modifiedPrice = page.getByRole("cell", { name: "900" }).first();
  }

  async goto(page: Page) {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.navCart.click({ force: true });
  }
}
