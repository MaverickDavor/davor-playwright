import { test, expect } from "@playwright/test";

test("has contact email", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Contact" }).click();
  // Expect a form to have input fields.
  page.getByText("Contact Email:");
  page.locator("#recipient-email");

  //await page.pause();
});

test("has contact name", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Contact" }).click();
  // Expect a form to have input fields.
  page.getByText("Contact Name:");
  page.getByRole("textbox", { name: "Contact Email: Contact Name:" });
});

test("has message", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Contact" }).click();
  // Expect a form to have input fields.
  page.getByText("Message:");
  page.getByRole("textbox", { name: "Message:" });
});

test("has buttons", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Contact" }).click();
  // Expect a form to cancel and send buttons.
  page.getByLabel("New message").getByText("Close");
  page.getByRole("button", { name: "Send message" });
});
