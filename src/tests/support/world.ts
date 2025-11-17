import { setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";
import type { Browser, Page, APIRequestContext } from "playwright";
import { PageHelpers } from "./page-helpers";
import { ApiHelpers } from "./api-helpers";

export interface TestWorld extends World {
  // UI
  browser: Browser;
  page: Page;
  helpers: PageHelpers;
  newPage?: Page;

  // API
  api: APIRequestContext;
  apiHelpers: ApiHelpers;

  // espaço pra compartilhar dados entre steps
  response?: any;
  status?: number;
  body?: any;
}

class CustomWorld extends World implements TestWorld {
  browser!: Browser;
  page!: Page;
  helpers!: PageHelpers;

  api!: APIRequestContext;
  apiHelpers!: ApiHelpers;

  response?: any;
  status?: number;
  body?: any;

  constructor(opts: IWorldOptions) {
    super(opts);
  }
}

setWorldConstructor(CustomWorld);
