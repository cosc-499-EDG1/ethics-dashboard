import { Action, action } from "easy-peasy";
//import { CaseOption } from "../../../node-src/build/models/option.model";


export interface OptionModel {
    num_options: number | null;
    owner_id: number | null;
    setNumOptions: Action<OptionModel, number>;
    setOwnerId: Action<OptionModel, number>;
}

const optionStore: OptionModel = {
    num_options: null,
    owner_id: null,

    setNumOptions: action((state, payload) => {
        state.num_options = payload;
    }),

    setOwnerId: action ((state, payload) => {
        state.owner_id = payload;
    })
};

export default optionStore;