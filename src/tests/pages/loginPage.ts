import type { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  private el = {
    user: () => this.page.locator("username"),
    pass: () => this.page.locator("password"),
    submit: () => this.page.locator("login-button"),
  };

  async goTo() {
    await this.page.goto("https://www.saucedemo.com");
  }

  async login(user: string, pass: string) {
    await this.page.locator('[data-test="username"]').fill(user);
    await this.page.locator('[data-test="password"]').fill(pass);
    await this.page.locator('[data-test="login-button"]').click();
  }
}
