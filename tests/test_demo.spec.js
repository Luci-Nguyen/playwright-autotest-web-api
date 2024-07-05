import { test, expect } from "@playwright/test";
import { LoginPage } from "../page/login";


test("Test login demoblaze page", async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.login("hoan", "123456");
});
