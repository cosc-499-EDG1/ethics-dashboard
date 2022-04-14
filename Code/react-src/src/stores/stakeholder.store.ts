import { Action, action } from "easy-peasy";
//import { CaseOption } from "../../../node-src/build/models/option.model";


export interface StakeholderStoreModel {
    num_stakeholders: number | null;
    owner_id: number | null;
    setNumStakeholders: Action<StakeholderStoreModel, number>;
    setOwnerId: Action<StakeholderStoreModel, number>;
}

const stakeholderStore: StakeholderStoreModel = {
    num_stakeholders: null,
    owner_id: null,

    setNumStakeholders: action((state, payload) => {
        state.num_stakeholders = payload;
    }),

    setOwnerId: action ((state, payload) => {
        state.owner_id = payload;
    })
};

export default stakeholderStore;