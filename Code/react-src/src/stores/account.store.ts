import AccountService from "../services/account.service";

import { Action, action, Computed, computed, Thunk, thunk } from "easy-peasy";

export interface AccountModel {
  account: Account | null;
  authToken: string | null;
  setAccount: Action<AccountModel, Account>;
  setAuthToken: Action<AccountModel, string>;
  logout: Action<AccountModel, boolean>;
  isLoggedIn: Computed<AccountModel, boolean>;
  login: Thunk<AccountModel, LoginData>;
  register: Thunk<AccountModel, RegisterData>;
}

interface AccountResponse {
  data: {
    account: Account;
    token: string;
  };
}

interface RegisterResponse {
  data: {
    message: string;
    success: boolean;
  };
}

const accountStore: AccountModel = {
  /*
   * Account Setup
   */
  account: null,
  authToken: null,

  setAccount: action((state, payload) => {
    state.account = payload;
  }),

  setAuthToken: action((state, payload) => {
    state.authToken = payload;
  }),

  logout: action((state, payload) => {
    state.account = null;
    state.authToken = null;
  }),

  isLoggedIn: computed((state) => {
    return !!state.account && !!state.authToken;
  }),

  login: thunk(async (actions, payload: LoginData) => {
    try {
      const response = await AccountService.login<AccountResponse>(payload);
      if (response.data.token) {
        // If the response has a token that means we logged in successfully!
        actions.setAccount(response.data.account);
        actions.setAuthToken(response.data.token);
      }
      return response.data;
    } catch (err) {
      return { message: "Error contacting API" };
    }
  }),

  register: thunk(async (actions, payload: RegisterData) => {
    try {
      const response = await AccountService.register<RegisterResponse>(payload);
      return response.data;
    } catch (err) {
      return { message: "Error contacting API" };
    }
  }),
};

export default accountStore;
