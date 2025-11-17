// src/tests/support/hooks.ts
import * as dotenv from "dotenv";
import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import type { TestWorld } from "./world";
import { chromium, BrowserContext, request } from "playwright";
import { PageHelpers } from "./page-helpers";
import { ApiHelpers } from "./api-helpers";

dotenv.config(); // Carrega as variáveis do arquivo .env para process.env

// Define o timeout padrão para todos os steps em 30 segundos.
setDefaultTimeout(30 * 1000);

const HEADLESS: boolean = (() => {
  const v = (process.env.HEADLESS ?? "0").toLowerCase();
  return v === "1" || v === "true";
})();

// permite trocar a API por env, mas mantém Reqres como default
const API_BASE_URL = process.env.API_BASE_URL ?? "https://reqres.in/api";

let ctx: BrowserContext;

Before(async function (this: TestWorld) {
  const browser = await chromium.launch({ headless: HEADLESS });
  ctx = await browser.newContext({ viewport: null });
  this.browser = browser;
  this.page = await ctx.newPage();
  this.helpers = new PageHelpers(this.page);

  this.api = await request.newContext({
    baseURL: API_BASE_URL,
    timeout: 30_000,
    extraHTTPHeaders: {
      Accept: "application/json",       // 🔹 força resposta JSON
      "User-Agent": "Playwright-Cucumber-POC"
    }
    // Se usar proxy corporativo:
    // proxy: { server: process.env.HTTPS_PROXY || process.env.HTTP_PROXY || "" }
  });

  this.apiHelpers = new ApiHelpers(this.api);
});

After(async function (this: TestWorld) {
  if (this.page) await this.page.close();
  if (ctx) await ctx.close();
  if (this.browser) await this.browser.close();
  if (this.api) await this.api.dispose();
});
