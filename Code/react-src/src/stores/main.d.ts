import { Action, Thunk, Computed } from "easy-peasy";

export type MainModel = {
  account: Account | null;
  authToken: string | null;
  setAccount: Action<MainModel, Account>;
  setAuthToken: Action<MainModel, string>;
  isLoggedIn: Computed<MainModel, boolean>;
  login: Thunk<MainModel, LoginData>;
}

interface AccountResponse {
  data: {
    account: Account;
    token: string;
  }
}
