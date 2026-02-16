import { test, expect } from "@playwright/test";

test.describe("Adding to Cart second", () => {
  test("add to bag", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");

    // Expect a link "to be named" a substring.
    await page.getByRole("link", { name: "Nexus" }).click();

    //intercept popup message
    page.once("dialog", async (dialog) => {
      expect(dialog.message()).toContain("Product added");
      await dialog.accept();
      console.log("Dialog accepted");
    });
    await page.pause();
    await page.getByRole("link", { name: "Add to cart" }).click();
    await page.getByRole("link", { name: "Cart", exact: true }).click();
    //await page.pause();
    await expect(page.getByRole("cell", { name: "Nexus" })).toBeVisible();
  });

  test("add to cart", async ({ page }) => {
    async function verifyAlertMessage(page: Page, expectedMessage: string) {
      // Return a promise that resolves when dialog is handled
      return new Promise<void>((resolve, reject) => {
        page.once("dialog", async (dialog) => {
          console.log(`Dialog appeared with message: "${dialog.message()}"`);
          try {
            expect(dialog.type()).toBe("alert");
            expect(dialog.message()).toContain(expectedMessage);
            await dialog.accept();
            resolve(); // Success
          } catch (error) {
            await dialog.accept(); // Still dismiss the dialog
            reject(error); // Propagate the failure
          }
        });
      });
    }

    await page.goto("https://www.demoblaze.com/index.html");
    await page.getByRole("link", { name: "Nexus" }).click();

    // Setup handler and wait for it to complete
    const dialogPromise = verifyAlertMessage(page, "Product added");
    await page.getByRole("link", { name: "Add to cart" }).click();
    await dialogPromise; // Wait for dialog verification to complete

    await page.getByRole("link", { name: "Cart", exact: true }).click();
    await expect(page.getByRole("cell", { name: "Nexus" })).toBeVisible();
  });
});

test.describe("Cart Elements check", () => {
  test("has cart", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    await page.getByRole("link", { name: "Cart" }).click();
    // Expect a cart to have columns.
    await expect
      .soft(page.getByRole("columnheader", { name: "Pic" }))
      .toBeVisible();
    await expect
      .soft(page.getByRole("columnheader", { name: "Title" }))
      .toBeVisible();
    await expect
      .soft(page.getByRole("columnheader", { name: "Price" }))
      .toBeVisible();
    await expect
      .soft(page.getByRole("columnheader", { name: "x" }))
      .toBeVisible();
    // Expect a page to have button.
    await expect(
      page.getByRole("button", { name: "Place Order" }),
    ).toBeVisible();
  });

  test("has checkout data", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    await page.getByRole("link", { name: "Cart" }).click();
    await page.getByRole("button", { name: "Place Order" }).click();
    //await page.pause();
    // Expect a cart to have columns.
    await expect.soft(page.getByText("Name:", { exact: true })).toBeVisible();
    await expect
      .soft(page.getByRole("textbox", { name: "Total: Name:" }))
      .toBeVisible();
    await expect.soft(page.getByText("Country:")).toBeVisible();
    await expect
      .soft(page.getByRole("textbox", { name: "Country:" }))
      .toBeVisible();
    await expect.soft(page.getByText("City:")).toBeVisible();
    await expect
      .soft(page.getByRole("textbox", { name: "City:" }))
      .toBeVisible();
    await expect.soft(page.getByText("Credit card:")).toBeVisible();
    await expect
      .soft(page.getByRole("textbox", { name: "Credit card:" }))
      .toBeVisible();
    await expect.soft(page.getByText("Month:")).toBeVisible();
    await expect
      .soft(page.getByRole("textbox", { name: "Month:" }))
      .toBeVisible();
    await expect.soft(page.getByText("Year:")).toBeVisible();
    await expect
      .soft(page.getByRole("textbox", { name: "Year:" }))
      .toBeVisible();
    //Expect to have close and purchase buttons
    await expect
      .soft(page.getByLabel("Place order").getByText("Close"))
      .toBeVisible();
    await expect(page.getByRole("button", { name: "Purchase" })).toBeVisible();
  });
});
