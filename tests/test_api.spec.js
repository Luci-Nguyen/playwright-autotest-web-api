import { test, expect } from "@playwright/test";

test("Test API get", async ({ request }) => {
  const a = [];
  const response = await request.get("https://api.restful-api.dev/objects");
  const data = await response.json();
  expect(response.status()).toBe(200);
  console.log(data);
  const text = await response.text();
  expect(text).toContain("Google Pixel 6 Pro");

  data.forEach((element) => {
    console.log();
    a.push(element.name);
  });
  console.log(a);
});

test("Test API post", async ({ request }) => {
  const dataBody = {
    name: "Apple MacBook Pro 16",
    data: {
      year: 2019,
      price: 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
    },
  };
  const response = await request.post(
    "https://api.restful-api.dev/objects",
    dataBody
  );
  const resData = await response.json();
  expect(response.status()).toEqual(200);
  console.log(resData);
});

test("Test API put", async ({ request }) => {
  const dataBody = {
    name: "morpheus",
    job: "zion resident",
  };
  const response = await request.put("https://reqres.in/api/users/2", dataBody);
  const resData = await response.json();
  expect(response.status()).toEqual(200);
  console.log(resData);
});

test("Test API delete", async ({ request }) => {
    const response = await request.delete("https://reqres.in/api/users/2");
    expect(response.status()).toEqual(204);
  });