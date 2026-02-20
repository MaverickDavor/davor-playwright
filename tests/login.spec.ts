import { test, expect, Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly loginTitle: Locator;
  readonly titleUsername: Locator;
  readonly fieldUsername: Locator;
  readonly titlePassword: Locator;
  readonly fieldPassword: Locator;
  readonly buttonClose: Locator;
  readonly buttonLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginTitle = page.getByRole("heading", { name: "Log in" });
    this.titleUsername = page.getByLabel("Log in").getByText("Username:");
    this.fieldUsername = page.locator("#loginusername");
    this.titlePassword = page.getByLabel("Log in").getByText("Password:");
    this.fieldPassword = page.locator("#loginpassword");
    this.buttonClose = page.getByLabel("Log in").getByText("Close");
    this.buttonLogin = page.getByRole("button", { name: "Log in" });
  }

  async goto() {
    await this.page.goto("https://www.demoblaze.com/index.html");
    await this.page.getByRole("link", { name: "Log in" }).click(); // jel ovo praksa ako se poziva samo jednom? Ili bolje u constructor stavit u lokatore?
  }
}

test.describe("Login", () => {
  test("has login", async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.goto();
    //expect page to have elements
    await expect.soft(Login.loginTitle).toBeVisible();
    await expect.soft(Login.titleUsername).toBeVisible();
    await expect.soft(Login.fieldUsername).toBeVisible();
    await expect.soft(Login.titlePassword).toBeVisible();
    await expect.soft(Login.fieldPassword).toBeVisible();

    //expect page to have buttons
    await expect.soft(Login.buttonClose).toBeVisible();
    await expect(Login.buttonLogin).toBeVisible();
    // await page.pause();
  });
});
