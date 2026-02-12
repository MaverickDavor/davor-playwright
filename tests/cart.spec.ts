import { test, expect } from "@playwright/test";

test("has cart", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Cart" }).click();
  // Expect a cart to have columns.
  page.getByRole("columnheader", { name: "Pic" });
  page.getByRole("columnheader", { name: "Title" });
  page.getByRole("columnheader", { name: "Price" });
  page.getByRole("columnheader", { name: "x" });
  // Expect a page to have button.
  page.getByRole("button", { name: "Place Order" });
});

test("has checkout data", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Cart" }).click();
  // Expect a cart to have columns.
  page.getByText("Total:");
  page.getByText("Name:", { exact: true });
  page.getByRole("textbox", { name: "Total: Name:" });
  page.getByText("Country:");
  page.getByRole("textbox", { name: "Country:" });
  page.getByText("City:");
  page.getByRole("textbox", { name: "City:" });
  page.getByText("Credit card:");
  page.getByRole("textbox", { name: "Credit card:" });
  page.getByText("Month:");
  page.getByRole("textbox", { name: "Month:" });
  page.getByText("Year:");
  page.getByRole("textbox", { name: "Year:" });
  //Expect to have close and purchase buttons
  page.getByLabel("Place order").getByText("Close");
  page.getByRole("button", { name: "Purchase" });
});
