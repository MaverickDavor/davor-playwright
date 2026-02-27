import { expect } from "@playwright/test";
//import { SignupPage } from "../pages/signup.page";
import { test } from "../fixtures/basePage";

test.describe("Sign Up", () => {
  test("has signup", async ({ signupPage }) => {
    await signupPage.goto();
    //expect page to have elements
    await expect.soft(signupPage.signupTitle).toBeVisible();
    await expect.soft(signupPage.titleUsername).toBeVisible();
    await expect.soft(signupPage.fieldUsername).toBeVisible();
    await expect.soft(signupPage.titlePassword).toBeVisible();
    await expect.soft(signupPage.fieldPassword).toBeVisible();

    //expect page to have buttons
    await expect.soft(signupPage.buttonClose).toBeVisible();
    await expect(signupPage.buttonSignup).toBeVisible();
  });
});
