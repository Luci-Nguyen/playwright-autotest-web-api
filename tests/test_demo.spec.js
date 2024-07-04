import { test, expect } from "@playwright/test";
import { LoginPage } from "../page/login";

// test("Login page", async ({ page }) => {
//   await page.goto("https://google.com");
//   await expect(page).toHaveTitle("Google");
// });

test("test", async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.login("hoan", "123456");
});
