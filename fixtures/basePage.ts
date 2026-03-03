import { test as base } from "@playwright/test";
import { AboutPage } from "../pages/about-us.page";
import { AddToCartPage } from "../pages/add-to-cart.page";
import { CartPage } from "../pages/cart.page";
import { ContactPage } from "../pages/contact.page";
import { HomePage } from "../pages/home.page";
import { LoginPage } from "../pages/login.page";
import { SignupPage } from "../pages/signup.page";
import { UICheckPage } from "../pages/UI-checks.page";

export const test = base.extend<{
  aboutPage: AboutPage;
  addToCartPage: AddToCartPage;
  cartPage: CartPage;
  contactPage: ContactPage;
  homePage: HomePage;
  loginPage: LoginPage;
  signupPage: SignupPage;
  uiCheckPage: UICheckPage;
}>({
  //define a fixture
  aboutPage: async ({ page }, use) => {
    await use(new AboutPage(page));
  },

  addToCartPage: async ({ page }, use) => {
    await use(new AddToCartPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  contactPage: async ({ page }, use) => {
    await use(new ContactPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },
  uiCheckPage: async ({ page }, use) => {
    await use(new UICheckPage(page));
  },
  /*
  page: async ({ page }, use) => {
    page.on("load", async () => {
      await page.addStyleTag({
        content: `::-webkit-scrollbar { display: none !important; }
                  * { scrollbar-width: none !important; overflow: -moz-scrollbars-none !important; }
                  html, body { overflow: hidden !important; }`,
      });
    });
    await use(page);
  },*/
});
