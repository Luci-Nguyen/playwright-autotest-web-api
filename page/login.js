export class LoginPage {
  constructor(page) {
    this.page = page;
    this.login_accept = page.locator('[id="login2"]');
    this.username_txt = page.locator('[id="loginusername"]');
    this.password_txt = page.locator('[id="loginpassword"]');
    this.login_btn = page.getByRole("button", { name: "Log in" });
  }

  async gotoLoginPage() {
    await this.page.goto('https://www.demoblaze.com/');
  }
  async login(username, password) {
    await this.login_accept.click();
    await this.username_txt.fill(username);
    await this.password_txt.fill(password);
    await this.login_btn.click();
  }
}