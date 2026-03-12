import { expect, request } from "@playwright/test";
import { phonesMocked } from "../../data/phones-mock.data";
import { test } from "../../fixtures/basePage";

test.describe("Device mock data", () => {
  test("mock data nexus", async ({ homePage, page }) => {
    // Expect a title "to contain" a substring.
    await page.route("**/api.demoblaze.com/view", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          cat: "phone",
          desc: "Izašao je Pixel 10, ovo je staro.",
          id: 3,
          img: "imgs/Nexus_6.jpg",
          price: 45000000.0,
          title: "Nexus 6",
        }),
      });
    });
    await homePage.goto();
    await homePage.nexus6.click();
    //await page.pause();
    await expect(page.locator(".price-container")).toContainText("450");
  });

  test("mock data phones", async ({ homePage, page }) => {
    // Expect a title "to contain" a substring.
    await page.route("**/api.demoblaze.com/bycat", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(phonesMocked),
      });
    });
    await homePage.goto();
    await homePage.linkPhones.click();
    //await page.pause();
    await expect(page.locator(".card-block").first()).toContainText("banana");
  });
});
