import { expect, request } from "@playwright/test";
import { phonesOriginal } from "../../data/phones-mock.data";
import { test } from "../../fixtures/basePage";

const phonesMockedNokia = {
  ...phonesOriginal,
  Items: phonesOriginal.Items.map((item) =>
    item.id === 2 ? { ...item, price: 450.0, title: "Nokia 3310" } : item,
  ),
};

const phonesMockedNexus = {
  ...phonesOriginal,
  Items: phonesOriginal.Items.map((item) =>
    item.id === 3
      ? { ...item, price: 4500000000000000.0, title: "Đe je pixel" }
      : item,
  ),
};

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

  test("mock data nokia", async ({ homePage, page }) => {
    // Expect a title "to contain" a substring.
    await page.route("**/api.demoblaze.com/bycat", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(phonesMockedNokia),
      });
    });
    await homePage.goto();
    await homePage.linkPhones.click();
    await page.pause();
    await expect(page.locator(".card-block").first()).toContainText(
      "Samsung Galaxy S6 is powered by 1.5GH",
    );
  });

  test("mock data pixel", async ({ homePage, page }) => {
    // Expect a title "to contain" a substring.
    await page.route("**/api.demoblaze.com/bycat", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(phonesMockedNexus),
      });
    });
    await homePage.goto();
    await homePage.linkPhones.click();
    //await page.pause();
    await expect(
      page.locator("div").filter({ hasText: "Đe je pixel$" }).nth(4),
    ).toContainText("The Motorola Google Nexus 6 is powered by 2.7GHz");
  });
});
