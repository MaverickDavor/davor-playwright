import { test as setup } from "./fixtures/basePage";
import { STORAGE_STATE } from "./playwright.config";

setup("login", async ({ loginPage, page }) => {
  await loginPage.goto();
  //expect page to have elements
  await loginPage.fieldUsername.fill("vnovacki");
  await loginPage.fieldPassword.fill("test.123");
  //await page.pause();
  await loginPage.buttonLogin.click();

  //next two lines advice from Claude due to Local storage (now I see this also in Viktor's file)
  await page.waitForSelector("text=welcome vnovacki");
  //await page.goto("https://www.demoblaze.com/index.html");

  await page.context().storageState({ path: STORAGE_STATE });
});
