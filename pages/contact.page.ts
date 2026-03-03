import { Locator, Page } from "@playwright/test";

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
  readonly dialogBody: Locator;

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
    this.dialogBody = page.getByRole("dialog", { name: "New message" });
  }

  async goto() {
    await this.page.goto("https://www.demoblaze.com/index.html");
    await this.navContact.click({ force: true });
  }
}
