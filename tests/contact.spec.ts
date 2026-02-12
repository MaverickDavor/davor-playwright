import { test, expect } from "@playwright/test";

test("has contact email", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Contact" }).click();
  // Expect a form to have input fields.
  await page.getByText("Contact Email:");
  await page.locator("#recipient-email");

  //await page.pause();
});

test("has contact name", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Contact" }).click();
  // Expect a form to have input fields.
  await page.getByText("Contact Name:");
  await page.getByRole("textbox", { name: "Contact Email: Contact Name:" });
});

test("has message", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Contact" }).click();
  // Expect a form to have input fields.
  await page.getByText("Message:");
  await page.getByRole("textbox", { name: "Message:" });
});

test("has buttons", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Contact" }).click();
  // Expect a form to cancel and send buttons.
  await page.getByLabel("New message").getByText("Close");
  await page.getByRole("button", { name: "Send message" });
});
