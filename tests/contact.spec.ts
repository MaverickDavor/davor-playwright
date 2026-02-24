import { test, expect, Locator, Page } from "@playwright/test";
import { ContactPage } from "../pages/contact.page";

test.describe("Contact elements check", () => {
  test("has contact email", async ({ page, browserName }) => {
    const contact = new ContactPage(page);
    await contact.goto();

    // Expect a form to have input fields.
    await expect.soft(contact.titleEmail).toBeVisible();
    await expect(contact.fieldEmail).toBeVisible();

    //await page.pause();
  });

  test("has contact name", async ({ page }) => {
    const contact = new ContactPage(page);
    await contact.goto();
    await expect.soft(contact.titleName).toBeVisible();
    await expect(contact.fieldName).toBeVisible();
  });

  test("has message", async ({ page }) => {
    const contact = new ContactPage(page);
    await contact.goto();
    // Expect a form to have input fields.
    await expect.soft(contact.titleMessage).toBeVisible();
    await expect(contact.fieldMessage).toBeVisible();
  });

  test("has buttons", async ({ page }) => {
    const contact = new ContactPage(page);
    await contact.goto();
    await expect.soft(contact.closeButton).toBeVisible();
    await expect(contact.sendButton).toBeVisible();
  });
});

test.describe("Fill Form", () => {
  test("fill contact form", async ({ page }) => {
    const contact = new ContactPage(page);
    await contact.goto();
    // Expect a form to cancel and send buttons.
    await contact.recipMail.fill("davor.ambrus@endava.com");
    await contact.recipName.fill("Pero");
    await contact.messageBody.fill(
      "Gle malu vocku poslije kise, puna je kapi pa se njise",
    );
    await contact.sendButton.click();
    //not sure how to validate this?
    await expect(contact.page).toHaveTitle(/STORE/);
  });
});
