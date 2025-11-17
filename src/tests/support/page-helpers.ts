import type { Page } from "playwright";
import { LoginPage } from "../pages/loginPage";

export class PageHelpers {
  constructor(private page: Page) { }

  // Lazy getters (instancia só quando usar)
  private _login?: LoginPage;
  get login(): LoginPage {
    if (!this._login) this._login = new LoginPage(this.page);
    return this._login;
  }

  // Ex.: outros helpers/páginas aqui:
  // private _home?: HomePage;
  // get home(): HomePage { ... }
}
