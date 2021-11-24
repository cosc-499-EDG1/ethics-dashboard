import { Action, Thunk, Computed } from "easy-peasy";

export type MainModel = {
  account: Account | null;
  authToken: string | null;
  setAccount: Action<MainModel, Account>;
  setAuthToken: Action<MainModel, string>;
  isLoggedIn: Computed<MainModel, boolean>;
  login: Thunk<MainModel, LoginData>;
  register: Thunk<MainModel, RegisterData>;
};

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
