import { createStore, createTypedHooks, persist } from "easy-peasy";
import accountStore, { AccountModel } from "./account.store";
import dashboardStore, { DashboardModel } from "./dashboard.store";
import stakeholderStore, { StakeholderModel } from "./stakeholder.store";


/**
 * Make sure to add any additional stores here.
 */
export interface MainModel {
  accounts: AccountModel;
  stakeholder: StakeholderModel;
  dashboard: DashboardModel;
}

/**
 * And here as well.
 */
const MainStore = createStore({
  accounts: persist(accountStore, {
    allow: ["account", "authToken"], // Persist account data in localStorage
  }),
  stakeholder: stakeholderStore,
  dashboard: dashboardStore,
});

export const { useStoreActions, useStoreState, useStoreDispatch, useStore } =
  createTypedHooks<MainModel>();

export default MainStore;
