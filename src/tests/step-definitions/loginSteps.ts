import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import type { TestWorld } from "../support/world.js";

Given("que estou na tela de login", async function (this: TestWorld) {
  await this.helpers.login.goTo();
});

When("eu entro com credenciais validas", async function (this: TestWorld) {
  await this.helpers.login.login("standard_user", "secret_sauce");
});

Then("eu entro no sistema", async function (this: TestWorld) {
  await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html");
});