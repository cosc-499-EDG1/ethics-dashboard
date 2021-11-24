import {
  createStore,
  action,
  thunk,
  createTypedHooks,
  persist,
  computed,
} from "easy-peasy";
import AccountService from "../services/account.service";
import { AccountResponse, MainModel, RegisterResponse } from "./main";

const MainStore = createStore<MainModel>(
  persist(
    {
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
    },
    {
      allow: ["account", "authToken"], // Persist account data in localStorage
    }
  )
);

export const { useStoreActions, useStoreState, useStoreDispatch, useStore } =
  createTypedHooks<MainModel>();

export default MainStore;
