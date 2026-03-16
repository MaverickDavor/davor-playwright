import { expect } from "@playwright/test";
import { test } from "../../fixtures/basePage";
import { devicesAPI } from "../../data/home.data";

const phones = devicesAPI[0];
const laptops = devicesAPI[1];
const monitors = devicesAPI[2];

test.describe("Home api check", () => {
  test("GET return product entries", async ({ request }) => {
    const response = await request.get("https://api.demoblaze.com/entries", {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        origin: "https://www.demoblaze.com",
        referer: "https://www.demoblaze.com/",
      },
    });

    // Status check
    expect.soft(response.status()).toBe(200);

    // Parse body
    const body = await response.json();
    //console.log("Response body:", JSON.stringify(body, null, 2));

    // Basic structure checks
    //expect.soft(body).toBeDefined();
    expect
      .soft(body.Items[1])
      .toHaveProperty(
        "desc",
        "The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. ",
      );
    expect(body.Items[1].desc).toContain("Nokia Lumia 1520");
    expect(body.Items[1]).toHaveProperty("price", 820);
  });

  test("POST check phones titles", async ({ request }) => {
    const response = await request.post("https://api.demoblaze.com/bycat", {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        origin: "https://www.demoblaze.com",
        referer: "https://www.demoblaze.com/",
      },

      data: {
        cat: "phone",
      },
    });

    expect.soft(response.status()).toBe(200);

    const body = await response.json();
    const responseTitles = body.Items.map(
      (item: { title: string }) => item.title,
    );

    for (const phone of phones) {
      expect.soft(responseTitles).toContain(phone);
      console.log(responseTitles, phone);
    }
  });

  test("POST check laptop titles", async ({ request }) => {
    const response = await request.post("https://api.demoblaze.com/bycat", {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        origin: "https://www.demoblaze.com",
        referer: "https://www.demoblaze.com/",
      },

      data: {
        cat: "notebook",
      },
    });

    expect.soft(response.status()).toBe(200);

    const body = await response.json();
    const responseTitles = body.Items.map(
      (item: { title: string }) => item.title,
    );

    for (const laptop of laptops) {
      expect.soft(responseTitles).toContain(laptop);
      console.log(responseTitles, laptop);
    }
  });

  test("POST check monitor titles", async ({ request }) => {
    const response = await request.post("https://api.demoblaze.com/bycat", {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        origin: "https://www.demoblaze.com",
        referer: "https://www.demoblaze.com/",
      },

      data: {
        cat: "monitor",
      },
    });

    expect.soft(response.status()).toBe(200);

    const body = await response.json();
    const responseTitles = body.Items.map(
      (item: { title: string }) => item.title,
    );

    for (const monitor of monitors) {
      expect.soft(responseTitles).toContain(monitor);
      console.log(responseTitles, monitor);
    }
  });

  test("GET products have all fields", async ({ request }) => {
    const response = await request.get("https://api.demoblaze.com/entries", {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        origin: "https://www.demoblaze.com",
        referer: "https://www.demoblaze.com/",
      },
    });

    // Status check
    expect.soft(response.status()).toBe(200);

    // Parse body
    const body = await response.json();
    body.Items.forEach((item: string) => {
      //console.log(item);
      expect.soft(item).toHaveProperty("cat");
      expect.soft(item).toHaveProperty("desc");
      expect.soft(item).toHaveProperty("id");
      expect.soft(item).toHaveProperty("img");
      expect.soft(item).toHaveProperty("price");
      expect.soft(item).toHaveProperty("title");
      //expect.soft(item).toHaveProperty("nema");
    });
  });

  test("GET products have correct fields type", async ({ request }) => {
    const response = await request.get("https://api.demoblaze.com/entries", {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        origin: "https://www.demoblaze.com",
        referer: "https://www.demoblaze.com/",
      },
    });

    // Status check
    expect.soft(response.status()).toBe(200);

    // Parse body
    const body = await response.json();
    body.Items.forEach((item: any) => {
      //console.log(item);
      expect.soft(typeof item.cat).toBe("string");
      expect.soft(typeof item.desc).toBe("string");
      expect.soft(typeof item.id).toBe("number");
      expect.soft(typeof item.img).toBe("string");
      expect.soft(typeof item.price).toBe("number");
      expect.soft(typeof item.title).toBe("string");
      //expect.soft(item).toHaveProperty("nema");
    });
  });
});
