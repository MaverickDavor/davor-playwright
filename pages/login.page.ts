import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly loginTitle: Locator;
  readonly titleUsername: Locator;
  readonly fieldUsername: Locator;
  readonly titlePassword: Locator;
  readonly fieldPassword: Locator;
  readonly buttonClose: Locator;
  readonly buttonLogin: Locator;
  readonly pageNav: Locator;
  readonly logged: Locator;
  readonly logOut: Locator;
  readonly logIn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageNav = page.getByRole("link", { name: "Log in" });
    this.loginTitle = page.getByRole("heading", { name: "Log in" });
    this.titleUsername = page.getByLabel("Log in").getByText("Username:");
    this.fieldUsername = page.locator("#loginusername");
    this.titlePassword = page.getByLabel("Log in").getByText("Password:");
    this.fieldPassword = page.locator("#loginpassword");
    this.buttonClose = page.getByLabel("Log in").getByText("Close");
    this.buttonLogin = page.getByRole("button", { name: "Log in" }); 
    this.logged = page.getByRole("link", { name: "Welcome maverick25" });
    this.logOut = page.getByRole("link", { name: "Log out" });
    this.logIn = page.getByRole('link', { name: 'Log in' });
  }

  async goto() {
    await this.page.goto("https://www.demoblaze.com/index.html");
    await this.pageNav.click(); // jel ovo praksa ako se poziva samo jednom? Ili bolje u constructor staviu lokatore?
  }
}
