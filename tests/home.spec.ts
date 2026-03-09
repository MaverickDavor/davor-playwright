import { expect, request } from "@playwright/test";
//import { test } from "../fixtures/basePage";
//import { HomePage } from "../pages/home.page";
import { devices } from "../data/home.data";
import { test } from "../fixtures/basePage";

const phones = devices[0];
const laptops = devices[1];
const monitors = devices[2];

test.describe("Home elements check", () => {
  test("has title", async ({ homePage, page }) => {
    await homePage.goto();
    // Expect a title "to contain" a substring.
    await expect(homePage.page).toHaveTitle(/STORE/);
  });

  test("has Phones", async ({ homePage }) => {
    await homePage.goto();
    // Expect a link "to be named" a substring.
    await expect(homePage.linkPhones).toBeVisible();
  });

  test("has Laptops", async ({ homePage }) => {
    await homePage.goto();
    // Expect a link "to be named" a substring.
    await expect(homePage.linkLaptops).toBeVisible();
  });

  test("has Monitors", async ({ homePage }) => {
    await homePage.goto();
    // Expect a link "to be named" a substring.
    await expect(homePage.linkMonitors).toBeVisible();
  });

  test("has Navigation Home", async ({ homePage }) => {
    await homePage.goto();
    // Expect a link "to be named" a substring.
    await expect(homePage.navHome).toBeVisible();
  });

  test("has Navigation Contact", async ({ homePage }) => {
    await homePage.goto();
    // Expect a link "to be named" a substring.
    await expect(homePage.navContact).toBeVisible();
  });

  test("has Navigation About Us", async ({ homePage }) => {
    await homePage.goto();
    // Expect a link "to be named" a substring.
    await expect(homePage.navAbout).toBeVisible();
  });

  test("has Navigation Cart", async ({ homePage }) => {
    await homePage.goto();
    // Expect a link "to be named" a substring.
    await expect(homePage.navCart).toBeVisible();
  });

  test("has Navigation Log in", async ({ homePage }) => {
    await homePage.goto();
    // Expect a link "to be named" a substring.
    await expect(homePage.navLogin).toBeVisible();
  });

  test("has Navigation Sign up", async ({ homePage }) => {
    await homePage.goto();
    // Expect a link "to be named" a substring.
    await expect(homePage.navSignup).toBeVisible();
  });
});

test.describe("Home Filters check", () => {
  test("filter Phones", async ({ homePage, page }) => {
    await homePage.goto();
    //await page.pause();
    await homePage.linkPhones.click();
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

  test("filter Laptops", async ({ homePage, page }) => {
    await homePage.goto();
    //await page.pause();
    await homePage.linkLaptops.click();
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

  test("filter Monitors", async ({ homePage, page }) => {
    await homePage.goto();
    //await page.pause();
    await homePage.linkMonitors.click();
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

test.describe("Integration tests", () => {
  test("phones filter request check", async ({ homePage, page }) => {
    await homePage.goto();
    //await page.pause();
    page.on("request", (request) => {
      if (request.url().includes("/bycat")) {
        expect(request.postDataJSON()).toEqual({
          cat: "phone",
        });
        console.log(request.postDataJSON());
      }
    });
    await homePage.linkPhones.click();
  });

  test("laptops filter request check", async ({ homePage, page }) => {
    await homePage.goto();
    //await page.pause();
    page.on("request", (request) => {
      if (request.url().includes("/bycat")) {
        expect(request.postDataJSON()).toEqual({
          cat: "notebook",
        });
        console.log(request.postDataJSON());
      }
    });
    await homePage.linkLaptops.click();
  });

  test("monitors filter request check", async ({ homePage, page }) => {
    await homePage.goto();
    //await page.pause();
    page.on("request", (request) => {
      if (request.url().includes("/bycat")) {
        expect(request.postDataJSON()).toEqual({
          cat: "monitor",
        });
        console.log(request.postDataJSON());
      }
    });
    await homePage.linkMonitors.click();
  });

  test.only("samsung galaxy s6", async ({ homePage, page }) => {
    await homePage.goto();
    //await page.pause();

    page.on("request", (request) => {
      if (request.url().includes("/view")) {
        expect(request.postDataJSON()).toEqual({
          cat: "123",
        });
        console.log(request.postDataJSON());
      }
    });
    await homePage.galaxyS6.click();
  });
});
