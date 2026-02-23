import { Locator, Page } from "@playwright/test";

export class SignupPage {
  readonly page: Page;
  readonly signupTitle: Locator;
  readonly titleUsername: Locator;
  readonly fieldUsername: Locator;
  readonly titlePassword: Locator;
  readonly fieldPassword: Locator;
  readonly buttonClose: Locator;
  readonly buttonSignup: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupTitle = page.getByRole("heading", { name: "Sign up" });
    this.titleUsername = page.getByLabel("Sign up").getByText("Username:");
    this.fieldUsername = page.getByRole("textbox", { name: "Username:" });
    this.titlePassword = page.getByLabel("Sign up").getByText("Password:");
    this.fieldPassword = page.getByRole("textbox", { name: "Password:" });
    this.buttonClose = page.getByLabel("Sign up").getByText("Close");
    this.buttonSignup = page.getByRole("button", { name: "Sign up" });
  }

  async goto() {
    await this.page.goto("https://www.demoblaze.com/index.html");
    await this.page.getByRole("link", { name: "Sign up" }).click(); // jel ovo praksa ako se poziva samo jednom? Ili bolje u constructor stavit u lokatore?
  }
}
