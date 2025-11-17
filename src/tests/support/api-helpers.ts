import type { APIRequestContext } from "playwright";
// import { UsersApi } from "../api/clients/usersApi";

export class ApiHelpers {
  constructor(private api: APIRequestContext) {}

  // private _users?: UsersApi;
  // get users(): UsersApi {
  //   if (!this._users) this._users = new UsersApi(this.api);
  //   return this._users;
  // }

  // adicione aqui outros clients futuramente (orders, auth, etc.)
}
