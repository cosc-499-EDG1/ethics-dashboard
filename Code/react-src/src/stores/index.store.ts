import { createStore, createTypedHooks, persist } from "easy-peasy";
import accountStore, { AccountModel } from "./account.store";

export interface MainModel {
  accounts: AccountModel;
}

const MainStore = createStore({
  accounts: persist(accountStore, {
    allow: ["account", "authToken"], // Persist account data in localStorage
  }),
});

export const { useStoreActions, useStoreState, useStoreDispatch, useStore } =
  createTypedHooks<MainModel>();

export default MainStore;
