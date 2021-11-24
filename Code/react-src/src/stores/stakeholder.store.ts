import { Action, action } from "easy-peasy";

export interface StakeholderModel {
  stakeholders: { [key: string]: Stakeholder};
  setStakeholder: Action<StakeholderModel , Stakeholder>;
}

interface Stakeholder {
  name: string;
  data: {
    [key: string]: string;
  };
}

const stakeholderStore: StakeholderModel = {
  stakeholders: {},

  setStakeholder: action((state, payload) => {
    state.stakeholders[payload.name] = payload;
  }),
}

export default stakeholderStore;