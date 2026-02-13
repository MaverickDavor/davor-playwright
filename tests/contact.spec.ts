import { test, expect } from "@playwright/test";

test("has contact email", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Contact" }).click();
  // Expect a form to have input fields.
  await expect.soft(page.getByText("Contact Email:")).toBeVisible();
  await expect(page.locator("#recipient-email")).toBeVisible();

  //await page.pause();
});

test("has contact name", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Contact" }).click();
  // Expect a form to have input fields.
  await expect.soft(page.getByText("Contact Name:")).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Contact Email: Contact Name:" }),
  ).toBeVisible();
});

test("has message", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Contact" }).click();
  // Expect a form to have input fields.
  await expect.soft(page.getByText("Message:")).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Message:" })).toBeVisible();
});

test("has buttons", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Contact" }).click();
  // Expect a form to cancel and send buttons.
  await expect
    .soft(page.getByLabel("New message").getByText("Close"))
    .toBeVisible();
  await expect(
    page.getByRole("button", { name: "Send message" }),
  ).toBeVisible();
});

test("fill contact form", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Contact" }).click();

  // Expect a form to cancel and send buttons.
  await page.locator("#recipient-email").fill("davor.ambrus@endava.com");
  await page
    .getByRole("textbox", { name: "Contact Email: Contact Name:" })
    .fill("Pero");
  await page
    .getByRole("textbox", { name: "Message:" })
    .fill("Gle malu vocku poslije kise, puna je kapi pa se njise");
  await page.getByRole("button", { name: "Send message" }).click();
  //not sure how to validate this?
  await expect(page).toHaveTitle(/STORE/);
});
