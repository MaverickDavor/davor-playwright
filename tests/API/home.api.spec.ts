import { test, expect } from "@playwright/test";

test("GET /entries - should return product entries", async ({ request }) => {
  const response = await request.get("https://api.demoblaze.com/entries", {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9",
      origin: "https://www.demoblaze.com",
      referer: "https://www.demoblaze.com/",
    },
  });

  // Status check
  expect(response.status()).toBe(200);

  // Parse body
  const body = await response.json();
  console.log("Response body:", JSON.stringify(body, null, 2));

  // Basic structure checks
  expect(body).toBeDefined();
});
