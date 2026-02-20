import { test, expect, Locator, Page } from "@playwright/test";

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
  }

  async goto() {
    await this.page.goto("https://www.demoblaze.com/index.html");
  }
}

const phones: string[] = [
  "Samsung galaxy s6",
  "Nokia lumia",
  "Nexus",
  "Samsung galaxy s7",
  "Iphone 6 32gb",
  "Sony xperia z5",
  "HTC One M9",
];

const laptops: string[] = [
  "Sony vaio i5",
  "Sony vaio i7",
  "MacBook air",
  "Dell i7 8gb",
  "Dell 15.6 Inch",
  "MacBook Pro",
];

const monitors: string[] = ["Apple monitor", "ASUS Full HD"];

test.describe("Home elements check", () => {
  test("has title", async ({ page }) => {
    const Home = new HomePage(page);
    await Home.goto();
    // Expect a title "to contain" a substring.
    await expect(Home.page).toHaveTitle(/STORE/);
  });

  test("has Phones", async ({ page }) => {
    const Home = new HomePage(page);
    await Home.goto();
    // Expect a link "to be named" a substring.
    await expect(Home.linkPhones).toBeVisible();
  });

  test("has Laptops", async ({ page }) => {
    const Home = new HomePage(page);
    await Home.goto();
    // Expect a link "to be named" a substring.
    await expect(Home.linkLaptops).toBeVisible();
  });

  test("has Monitors", async ({ page }) => {
    const Home = new HomePage(page);
    await Home.goto();
    // Expect a link "to be named" a substring.
    await expect(Home.linkMonitors).toBeVisible();
  });

  test("has Navigation Home", async ({ page }) => {
    const Home = new HomePage(page);
    await Home.goto();
    // Expect a link "to be named" a substring.
    await expect(Home.navHome).toBeVisible();
  });

  test("has Navigation Contact", async ({ page }) => {
    const Home = new HomePage(page);
    await Home.goto();
    // Expect a link "to be named" a substring.
    await expect(Home.navContact).toBeVisible();
  });

  test("has Navigation About Us", async ({ page }) => {
    const Home = new HomePage(page);
    await Home.goto();
    // Expect a link "to be named" a substring.
    await expect(Home.navAbout).toBeVisible();
  });

  test("has Navigation Cart", async ({ page }) => {
    const Home = new HomePage(page);
    await Home.goto();
    // Expect a link "to be named" a substring.
    await expect(Home.navCart).toBeVisible();
  });

  test("has Navigation Log in", async ({ page }) => {
    const Home = new HomePage(page);
    await Home.goto();
    // Expect a link "to be named" a substring.
    await expect(Home.navLogin).toBeVisible();
  });

  test("has Navigation Sign up", async ({ page }) => {
    const Home = new HomePage(page);
    await Home.goto();
    // Expect a link "to be named" a substring.
    await expect(Home.navSignup).toBeVisible();
  });
});

test.describe("Home Filters check", () => {
  test("filter Phones", async ({ page }) => {
    const Home = new HomePage(page);
    await Home.goto();
    //await page.pause();
    await Home.linkPhones.click();
    // Expect a link "to be named" a substring.
    /*for (let i = 0; i < phones.length; i++) {
      await expect
        .soft(page.getByRole("heading", { name: phones[i] }))
        .toBeVisible();
    }*/

    for (const phone of phones) {
      await expect
        .soft(page.getByRole("heading", { name: phone }))
        .toBeVisible();
    }

    /* for (let i = 0; i < laptops.length; i++) {
      await expect
        .soft(page.getByRole("heading", { name: laptops[i] }))
        .not.toBeVisible();
    } */
    for (const laptop of laptops) {
      await expect
        .soft(page.getByRole("heading", { name: laptop }))
        .not.toBeVisible();
    }

    /* for (let i = 0; i < monitors.length; i++) {
      await expect
        .soft(page.getByRole("heading", { name: monitors[i] }))
        .not.toBeVisible();
    } */
    for (const monitor of monitors) {
      await expect
        .soft(page.getByRole("heading", { name: monitor }))
        .not.toBeVisible();
    }
  });

  test("filter Laptops", async ({ page }) => {
    const Home = new HomePage(page);
    await Home.goto();
    //await page.pause();
    await Home.linkLaptops.click();
    // Expect a link "to be named" a substring.
    for (const phone of phones) {
      await expect
        .soft(page.getByRole("heading", { name: phone }))
        .not.toBeVisible();
    }

    for (const laptop of laptops) {
      await expect
        .soft(page.getByRole("heading", { name: laptop }))
        .toBeVisible();
    }

    for (const monitor of monitors) {
      await expect
        .soft(page.getByRole("heading", { name: monitor }))
        .not.toBeVisible();
    }
  });

  test("filter Monitors", async ({ page }) => {
    const Home = new HomePage(page);
    await Home.goto();
    //await page.pause();
    await Home.linkMonitors.click();
    // Expect a link "to be named" a substring.
    for (const phone of phones) {
      await expect
        .soft(page.getByRole("heading", { name: phone }))
        .not.toBeVisible();
    }

    for (const laptop of laptops) {
      await expect
        .soft(page.getByRole("heading", { name: laptop }))
        .not.toBeVisible();
    }

    for (const monitor of monitors) {
      await expect
        .soft(page.getByRole("heading", { name: monitor }))
        .toBeVisible();
    }
  });
});
