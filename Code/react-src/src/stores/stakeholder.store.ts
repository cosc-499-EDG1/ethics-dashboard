import { Action, action } from "easy-peasy";

export interface StakeholderModel {
  stakeholders: Stakeholder | null;
  setStakeholder: Action<StakeholderModel , Stakeholder>;
}

interface Stakeholder {
  name: string;
  data: {
    [key: string]: string;
  };
}

const stakeholderStore: StakeholderModel = {
  stakeholders: {name: "", data: {}},   // Confused

  setStakeholder: action((state, payload) => {
    state.stakeholders[payload.name] = payload.data;
  }),
}

export default stakeholderStore;