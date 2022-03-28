import AccountService, { AccountResponse } from "../services/account.service";

import { Action, action, Computed, computed, Thunk, thunk, useStoreState, State } from "easy-peasy";
import Dashboard from "../../../node-src/build/models/dashboard.model"
import { AccountModel } from "./account.store";
import Account from "../../../node-src/build/models/account/account.model";

export interface DashboardData {
    dashboard_id: number;
    owner_id: number;
};

export interface DashboardModel {
    dashboard_id: number | null;
    owner_id: number | null;
    setDashboardId: Action<DashboardModel, number>;
    setOwnerId: Action<DashboardModel, number>;
}


const dashboardStore: DashboardModel = {
    dashboard_id: null,
    owner_id: null,

    setDashboardId: action((state, payload) => {
        state.dashboard_id = payload;
    }),

    setOwnerId: action((state, payload) => {
        state.owner_id = payload;
    })
};


export default dashboardStore;
