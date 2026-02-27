import { expect } from "@playwright/test";
//import { ContactPage } from "../pages/contact.page";
import { test } from "../fixtures/basePage";

test.describe("Contact elements check", () => {
  test("has contact email", async ({ contactPage }) => {
    await contactPage.goto();

    // Expect a form to have input fields.
    await expect.soft(contactPage.titleEmail).toBeVisible();
    await expect(contactPage.fieldEmail).toBeVisible();

    //await page.pause();
  });

  test("has contact name", async ({ contactPage }) => {
    await contactPage.goto();
    await expect.soft(contactPage.titleName).toBeVisible();
    await expect(contactPage.fieldName).toBeVisible();
  });

  test("has message", async ({ contactPage }) => {
    await contactPage.goto();
    // Expect a form to have input fields.
    await expect.soft(contactPage.titleMessage).toBeVisible();
    await expect(contactPage.fieldMessage).toBeVisible();
  });

  test("has buttons", async ({ contactPage }) => {
    await contactPage.goto();
    await expect.soft(contactPage.closeButton).toBeVisible();
    await expect(contactPage.sendButton).toBeVisible();
  });
});

test.describe("Fill Form", () => {
  test("fill contact form", async ({ contactPage }) => {
    await contactPage.goto();
    // Expect a form to cancel and send buttons.
    await contactPage.recipMail.fill("davor.ambrus@endava.com");
    await contactPage.recipName.fill("Pero");
    await contactPage.messageBody.fill(
      "Gle malu vocku poslije kise, puna je kapi pa se njise",
    );
    await contactPage.sendButton.click({ force: true });
    //not sure how to validate this?
    await expect(contactPage.page).toHaveTitle(/STORE/);
  });
});
