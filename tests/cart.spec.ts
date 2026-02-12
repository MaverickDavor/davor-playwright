import { test, expect } from "@playwright/test";

test("has cart", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Cart" }).click();
  // Expect a cart to have columns.
  await expect(page.getByRole("columnheader", { name: "Pic" })).toBeVisible();
  await expect(page.getByRole("columnheader", { name: "Title" })).toBeVisible();
  await expect(page.getByRole("columnheader", { name: "Price" })).toBeVisible();
  await expect(page.getByRole("columnheader", { name: "x" })).toBeVisible();
  // Expect a page to have button.
  await expect(page.getByRole("button", { name: "Place Order" })).toBeVisible();
});

test("has checkout data", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Cart" }).click();
  await page.getByRole("button", { name: "Place Order" }).click();
  //await page.pause();
  // Expect a cart to have columns.
  await expect(page.getByText("Name:", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Total: Name:" }),
  ).toBeVisible();
  await expect(page.getByText("Country:")).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Country:" })).toBeVisible();
  await expect(page.getByText("City:")).toBeVisible();
  await expect(page.getByRole("textbox", { name: "City:" })).toBeVisible();
  await expect(page.getByText("Credit card:")).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Credit card:" }),
  ).toBeVisible();
  await expect(page.getByText("Month:")).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Month:" })).toBeVisible();
  await expect(page.getByText("Year:")).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Year:" })).toBeVisible();
  //Expect to have close and purchase buttons
  await expect(page.getByLabel("Place order").getByText("Close")).toBeVisible();
  await expect(page.getByRole("button", { name: "Purchase" })).toBeVisible();
});
