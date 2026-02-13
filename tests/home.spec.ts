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

test("has title", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  //await page.getByRole("link", { name: "Contact" }).click();
  //await page.pause();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/STORE/);
});

test("has Phones", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  // Expect a link "to be named" a substring.
  await expect(page.getByRole("link", { name: "Phones" })).toBeVisible();
  //await page.pause();
});

test("has Laptops", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  // Expect a link "to be named" a substring.
  await expect(page.getByRole("link", { name: "Laptops" })).toBeVisible();
  //await page.pause();
});

test("has Monitors", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  // Expect a link "to be named" a substring.
  await expect(page.getByRole("link", { name: "Monitors" })).toBeVisible();
  //await page.pause();
});

test("has Navigation Home", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  // Expect a link "to be named" a substring.
  await expect(
    page.getByRole("link", { name: "Home (current)" }),
  ).toBeVisible();
  //await page.pause();
});

test("has Navigation Contact", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  // Expect a link "to be named" a substring.
  await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();
  //await page.pause();
});

test("has Navigation About Us", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  // Expect a link "to be named" a substring.
  await expect(page.getByRole("link", { name: "About Us" })).toBeVisible();
  //await page.pause();
});

test("has Navigation Cart", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  // Expect a link "to be named" a substring.
  await expect(page.getByRole("link", { name: "Cart" })).toBeVisible();
  //await page.pause();
});

test("has Navigation Log in", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  // Expect a link "to be named" a substring.
  await expect(page.getByRole("link", { name: "Log in" })).toBeVisible();
  //await page.pause();
});

test("has Navigation Sign up", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  // Expect a link "to be named" a substring.
  await expect(page.getByRole("link", { name: "Sign up" })).toBeVisible();
  //await page.pause();
});

test("filter Phones", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  //await page.pause();
  await page.getByRole("link", { name: "Phones" }).click();
  // Expect a link "to be named" a substring.
  for (let i = 0; i < phones.length; i++) {
    await expect
      .soft(page.getByRole("heading", { name: phones[i] }))
      .toBeVisible();
  }

  for (let i = 0; i < laptops.length; i++) {
    await expect
      .soft(page.getByRole("heading", { name: laptops[i] }))
      .not.toBeVisible();
  }

  for (let i = 0; i < monitors.length; i++) {
    await expect
      .soft(page.getByRole("heading", { name: monitors[i] }))
      .not.toBeVisible();
  }
});

test("filter Laptops", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  //await page.pause();
  await page.getByRole("link", { name: "Laptops" }).click();
  // Expect a link "to be named" a substring.
  for (let i = 0; i < phones.length; i++) {
    await expect
      .soft(page.getByRole("heading", { name: phones[i] }))
      .not.toBeVisible();
  }

  for (let i = 0; i < laptops.length; i++) {
    await expect
      .soft(page.getByRole("heading", { name: laptops[i] }))
      .toBeVisible();
  }

  for (let i = 0; i < monitors.length; i++) {
    await expect
      .soft(page.getByRole("heading", { name: monitors[i] }))
      .not.toBeVisible();
  }
});

test("filter Monitors", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  //await page.pause();
  await page.getByRole("link", { name: "Monitors" }).click();
  // Expect a link "to be named" a substring.
  for (let i = 0; i < phones.length; i++) {
    await expect
      .soft(page.getByRole("heading", { name: phones[i] }))
      .not.toBeVisible();
  }

  for (let i = 0; i < laptops.length; i++) {
    await expect
      .soft(page.getByRole("heading", { name: laptops[i] }))
      .not.toBeVisible();
  }

  for (let i = 0; i < monitors.length; i++) {
    await expect
      .soft(page.getByRole("heading", { name: monitors[i] }))
      .toBeVisible();
  }
});

test("add to cart", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  // Expect a link "to be named" a substring.
  await page.getByRole("link", { name: "Nexus" }).click();
  //intercept popup message
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("link", { name: "Add to cart" }).click();
  await page.getByRole("link", { name: "Cart", exact: true }).click();
  //await page.pause();
  await expect(page.getByRole("cell", { name: "Nexus" })).toBeVisible();
});
