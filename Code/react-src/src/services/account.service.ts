import Account from "../../../node-src/build/app/models/account.model";
import http from "../helpers/http";
import { LoginData, RegisterData } from "../stores/account.store";

export interface AccountResponse {
  data: {
    account?: Account;
    token?: string;
    message?: string;
  };
}

export interface RegisterResponse {
  data: {
    message: string;
    success: boolean;
  };
}
class AccountService {
  login(data: LoginData): Promise<AccountResponse> {
    return http.post("/account/login", data);
  }

  register(data: RegisterData): Promise<RegisterResponse> {
    return http.post("/account/register", data);
  }
}

export default new AccountService();
