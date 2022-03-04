import { Action, action, Thunk, thunk } from "easy-peasy";
import { title } from "process";
import { NumberLiteralType } from "typescript";
import StakeholderService, {StakeholderResponse} from "../services/stakeholder.service";
export interface StakeholderModel {
  stakeholders: { [key: string]: StakeholderData};
  setStakeholder: Action<StakeholderModel , StakeholderData>;
  addStakeholder: Thunk<StakeholderModel, StakeholderData>;
}

export interface StakeholderData {
  title: string;
  description: string;
  num: number;
  dashboard_id: number;
}

const stakeholderStore: StakeholderModel = {
  stakeholders: {},

  setStakeholder: action((state, payload) => {
    state.stakeholders[payload.title] = payload;
  }),

  addStakeholder: thunk( async (actions, payload: StakeholderData) => {
    try {
      const response = await StakeholderService.addStakeholder(payload);
      return response.data;
    }catch (err) {
      return {message: "Error contacting API"};
    }
  }),
}

export default stakeholderStore;