import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly linkPhones: Locator;
  readonly linkMonitors: Locator;
  readonly linkLaptops: Locator;
  readonly navHome: Locator;
  readonly navContact: Locator;
  readonly navAbout: Locator;
  readonly navCart: Locator;
  readonly navLogin: Locator;
  readonly navSignup: Locator;
  readonly slider: Locator;
  readonly sidebar: Locator;
  readonly navbar: Locator;
  readonly body: Locator;
  readonly footer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.linkPhones = page.getByRole("link", { name: "Phones" });
    this.linkLaptops = page.getByRole("link", { name: "Laptops" });
    this.linkMonitors = page.getByRole("link", { name: "Monitors" });
    this.navHome = page.getByRole("link", { name: "Home (current)" });
    this.navContact = page.getByRole("link", { name: "Contact" });
    this.navAbout = page.getByRole("link", { name: "About Us" });
    this.navCart = page.getByRole("link", { name: "Cart" });
    this.navLogin = page.getByRole("link", { name: "Log in" });
    this.navSignup = page.getByRole("link", { name: "Sign up" });
    this.slider = page.getByRole("img", { name: "First slide" });
    this.sidebar = page
      .locator("div")
      .filter({ hasText: "CATEGORIES Phones Laptops" })
      .nth(2);
    this.navbar = page.locator("#navbarExample");
    this.body = page.locator("#tbodyid");
    this.footer = page.locator("#footc");
  }

  async goto() {
    await this.page.goto("https://www.demoblaze.com/index.html");
  }
}
