import { createStore, createTypedHooks, persist } from "easy-peasy";
import accountStore, { AccountModel } from "./account.store";
import stakeholderStore, { StakeholderModel } from "./stakeholder.store";


export interface MainModel {
  accounts: AccountModel;
  stakeholder: StakeholderModel;
}

const MainStore = createStore({
  accounts: persist(accountStore, {
    allow: ["account", "authToken"], // Persist account data in localStorage
  }),
  stakeholder: stakeholderStore,
});

export const { useStoreActions, useStoreState, useStoreDispatch, useStore } =
  createTypedHooks<MainModel>();

export default MainStore;
