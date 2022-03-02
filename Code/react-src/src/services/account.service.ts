import Account from "../../../node-src/build/models/account/account.model";
import ClassGroup from "../../../node-src/build/models/classgroup.model";
import http, { authHeader } from "../helpers/http";
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

export interface ClassDataResponse {
  data: {
    student: ClassGroup[] | null;
    teaching_assistant: ClassGroup[] | null;
    instructor: ClassGroup[] | null;
  };
}

class AccountService {
  login(data: LoginData): Promise<AccountResponse> {
    return http.post("/account/login", data);
  }

  register(data: RegisterData): Promise<RegisterResponse> {
    return http.post("/account/register", data);
  }

  getClasses(): Promise<ClassDataResponse> {
    return http.get("/account/classes", authHeader());
  }
}

export default new AccountService();
