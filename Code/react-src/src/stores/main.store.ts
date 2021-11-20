import { createStore, action, thunk } from "easy-peasy";
import AccountService from "../services/account.service";

const MainStore = createStore<MainModel>({
  /*
   * Account Setup
   */
  myAccount: {},

  login: thunk(
    async (actions, payload: { email: string; password: string }) => {
      const response = await AccountService.login(payload);
      return response.data;
    }
  ),
});

export default MainStore;
