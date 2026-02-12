import { test, expect } from "@playwright/test";

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
  await page.getByRole("link", { name: "Phones" });
  //await page.pause();
});

test("has Laptops", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  // Expect a link "to be named" a substring.
  await page.getByRole("link", { name: "Laptops" });
  //await page.pause();
});

test("has Monitors", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  // Expect a link "to be named" a substring.
  await page.getByRole("link", { name: "Monitors" });
  //await page.pause();
});

test("has Navigation Home", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  // Expect a link "to be named" a substring.
  await page.getByRole("link", { name: "Home (current)" });
  //await page.pause();
});

test("has Navigation Contact", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  // Expect a link "to be named" a substring.
  await page.getByRole("link", { name: "Contact" });
  //await page.pause();
});

test("has Navigation About Us", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  // Expect a link "to be named" a substring.
  await page.getByRole("link", { name: "About Us" });
  //await page.pause();
});

test("has Navigation Cart", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  // Expect a link "to be named" a substring.
  await page.getByRole("link", { name: "Cart" });
  //await page.pause();
});

test("has Navigation Log in", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  // Expect a link "to be named" a substring.
  await page.getByRole("link", { name: "Log in" });
  //await page.pause();
});

test("has Navigation Sign up", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  // Expect a link "to be named" a substring.
  await page.getByRole("link", { name: "Sign up" });
  //await page.pause();
});
