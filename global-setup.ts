import { test as setup } from "./fixtures/basePage";
import { STORAGE_STATE } from "./playwright.config";
import "dotenv/config";

const username = process.env.USER;
const password = process.env.PASSWORD;

setup("login", async ({ loginPage, page }) => {
  await loginPage.goto();
  //expect page to have elements
  console.log(process.env.USERNAME);
  console.log(process.env.PASSWORD);
  await loginPage.fieldUsername.fill(username as string);
  await loginPage.fieldPassword.fill(password as string);
  //await page.pause();
  await loginPage.buttonLogin.click();

  //next two lines advice from Claude due to Local storage (now I see this also in Viktor's file)
  await page.waitForSelector("text=welcome maverick25");
  //await page.goto("https://www.demoblaze.com/index.html");

  await page.context().storageState({ path: STORAGE_STATE });
});
