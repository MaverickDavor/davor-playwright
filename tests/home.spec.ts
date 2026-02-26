import { test, expect, Locator, Page } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { devices } from "../data/home.data";

const phones = devices[0];
const laptops = devices[1];
const monitors = devices[2];

test.describe("Home elements check", () => {
  test("has title", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    // Expect a title "to contain" a substring.
    await expect(home.page).toHaveTitle(/STORE/);
  });

  test("has Phones", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    // Expect a link "to be named" a substring.
    await expect(home.linkPhones).toBeVisible();
  });

  test("has Laptops", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    // Expect a link "to be named" a substring.
    await expect(home.linkLaptops).toBeVisible();
  });

  test("has Monitors", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    // Expect a link "to be named" a substring.
    await expect(home.linkMonitors).toBeVisible();
  });

  test("has Navigation Home", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    // Expect a link "to be named" a substring.
    await expect(home.navHome).toBeVisible();
  });

  test("has Navigation Contact", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    // Expect a link "to be named" a substring.
    await expect(home.navContact).toBeVisible();
  });

  test("has Navigation About Us", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    // Expect a link "to be named" a substring.
    await expect(home.navAbout).toBeVisible();
  });

  test("has Navigation Cart", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    // Expect a link "to be named" a substring.
    await expect(home.navCart).toBeVisible();
  });

  test("has Navigation Log in", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    // Expect a link "to be named" a substring.
    await expect(home.navLogin).toBeVisible();
  });

  test("has Navigation Sign up", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    // Expect a link "to be named" a substring.
    await expect(home.navSignup).toBeVisible();
  });
});

test.describe("Home Filters check", () => {
  test("filter Phones", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    //await page.pause();
    await home.linkPhones.click();
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
    const home = new HomePage(page);
    await home.goto();
    //await page.pause();
    await home.linkLaptops.click();
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
    const home = new HomePage(page);
    await home.goto();
    //await page.pause();
    await home.linkMonitors.click();
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
