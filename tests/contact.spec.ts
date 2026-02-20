import { test, expect, Locator, Page } from "@playwright/test";
//import { HomePage } from "./home.spec.ts";

export class ContactPage {
  readonly page: Page;
  readonly titleEmail: Locator;
  readonly fieldEmail: Locator;
  readonly navContact: Locator;
  readonly titleName: Locator;
  readonly fieldName: Locator;
  readonly titleMessage: Locator;
  readonly fieldMessage: Locator;
  readonly closeButton: Locator;
  readonly sendButton: Locator;
  readonly recipMail: Locator;
  readonly recipName: Locator;
  readonly messageBody: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleEmail = page.getByText("Contact Email:");
    this.fieldEmail = page.locator("#recipient-email");
    this.navContact = page.getByRole("link", { name: "Contact" });
    this.titleName = page.getByText("Contact Name:");
    this.fieldName = page.getByRole("textbox", {
      name: "Contact Email: Contact Name:",
    });
    this.titleMessage = page.getByText("Message:");
    this.fieldMessage = page.getByRole("textbox", { name: "Message:" });
    this.closeButton = page.getByLabel("New message").getByText("Close");
    this.sendButton = page.getByRole("button", { name: "Send message" });
    this.recipMail = page.locator("#recipient-email");
    this.recipName = page.getByRole("textbox", {
      name: "Contact Email: Contact Name:",
    });
    this.messageBody = page.getByRole("textbox", { name: "Message:" });
  }

  async goto() {
    await this.page.goto("https://www.demoblaze.com/index.html");
  }
}

test.describe("Contact elements check", () => {
  test("has contact email", async ({ page }) => {
    const Contact = new ContactPage(page);
    //const Home = new HomePage(page);
    await Contact.goto();
    //await Home.navContact.click();
    await Contact.navContact.click();

    // Expect a form to have input fields.
    await expect.soft(Contact.titleEmail).toBeVisible();
    await expect(Contact.fieldEmail).toBeVisible();

    //await page.pause();
  });

  test("has contact name", async ({ page }) => {
    const Contact = new ContactPage(page);
    await Contact.goto();
    await Contact.navContact.click();
    await expect.soft(Contact.titleName).toBeVisible();
    await expect(Contact.fieldName).toBeVisible();
  });

  test("has message", async ({ page }) => {
    const Contact = new ContactPage(page);
    await Contact.goto();
    await Contact.navContact.click();
    // Expect a form to have input fields.
    await expect.soft(Contact.titleMessage).toBeVisible();
    await expect(Contact.fieldMessage).toBeVisible();
  });

  test("has buttons", async ({ page }) => {
    const Contact = new ContactPage(page);
    await Contact.goto();
    await Contact.navContact.click();
    await expect.soft(Contact.closeButton).toBeVisible();
    await expect(Contact.sendButton).toBeVisible();
  });
});

test.describe("Fill Form", () => {
  test("fill contact form", async ({ page }) => {
    const Contact = new ContactPage(page);
    await Contact.goto();
    await Contact.navContact.click();
    // Expect a form to cancel and send buttons.
    await Contact.recipMail.fill("davor.ambrus@endava.com");
    await Contact.recipName.fill("Pero");
    await Contact.messageBody.fill(
      "Gle malu vocku poslije kise, puna je kapi pa se njise",
    );
    await Contact.sendButton.click();
    //not sure how to validate this?
    await expect(Contact.page).toHaveTitle(/STORE/);
  });
});
