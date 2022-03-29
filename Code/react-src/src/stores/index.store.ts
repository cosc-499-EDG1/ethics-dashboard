import { createStore, createTypedHooks, persist } from "easy-peasy";
import accountStore, { AccountModel } from "./account.store";
import dashboardStore, { DashboardModel } from "./dashboard.store";
import optionStore, { OptionModel } from "./option.store";


/**
 * Make sure to add any additional stores here.
 */
export interface MainModel {
  accounts: AccountModel;
  dashboard: DashboardModel;
  options: OptionModel;
}

/**
 * And here as well.
 */
const MainStore = createStore({
  accounts: persist(accountStore, {
    allow: ["account", "authToken"], // Persist account data in localStorage
  }),
  dashboard: persist(dashboardStore),
  options: persist(optionStore),
});

export const { useStoreActions, useStoreState, useStoreDispatch, useStore } =
  createTypedHooks<MainModel>();

export default MainStore;
