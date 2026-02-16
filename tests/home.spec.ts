import { test, expect } from "@playwright/test";

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
    await page.goto("https://www.demoblaze.com/index.html");
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/STORE/);
  });

  test("has Phones", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    // Expect a link "to be named" a substring.
    await expect(page.getByRole("link", { name: "Phones" })).toBeVisible();
  });

  test("has Laptops", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    // Expect a link "to be named" a substring.
    await expect(page.getByRole("link", { name: "Laptops" })).toBeVisible();
  });

  test("has Monitors", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    // Expect a link "to be named" a substring.
    await expect(page.getByRole("link", { name: "Monitors" })).toBeVisible();
  });

  test("has Navigation Home", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    // Expect a link "to be named" a substring.
    await expect(
      page.getByRole("link", { name: "Home (current)" }),
    ).toBeVisible();
  });

  test("has Navigation Contact", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    // Expect a link "to be named" a substring.
    await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();
  });

  test("has Navigation About Us", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    // Expect a link "to be named" a substring.
    await expect(page.getByRole("link", { name: "About Us" })).toBeVisible();
  });

  test("has Navigation Cart", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    // Expect a link "to be named" a substring.
    await expect(page.getByRole("link", { name: "Cart" })).toBeVisible();
  });

  test("has Navigation Log in", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    // Expect a link "to be named" a substring.
    await expect(page.getByRole("link", { name: "Log in" })).toBeVisible();
  });

  test("has Navigation Sign up", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    // Expect a link "to be named" a substring.
    await expect(page.getByRole("link", { name: "Sign up" })).toBeVisible();
  });
});

test.describe("Home Filters check", () => {
  test("filter Phones", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    //await page.pause();
    await page.getByRole("link", { name: "Phones" }).click();
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
    await page.goto("https://www.demoblaze.com/index.html");
    //await page.pause();
    await page.getByRole("link", { name: "Laptops" }).click();
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
    await page.goto("https://www.demoblaze.com/index.html");
    //await page.pause();
    await page.getByRole("link", { name: "Monitors" }).click();
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
