import { test, expect, Page, Locator } from "@playwright/test";
import { SignupPage } from "../pages/signup.page";

test.describe("Sign Up", () => {
  test("has signup", async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.goto();
    //expect page to have elements
    await expect.soft(signup.signupTitle).toBeVisible();
    await expect.soft(signup.titleUsername).toBeVisible();
    await expect.soft(signup.fieldUsername).toBeVisible();
    await expect.soft(signup.titlePassword).toBeVisible();
    await expect.soft(signup.fieldPassword).toBeVisible();

    //expect page to have buttons
    await expect.soft(signup.buttonClose).toBeVisible();
    await expect(signup.buttonSignup).toBeVisible();
  });
});
