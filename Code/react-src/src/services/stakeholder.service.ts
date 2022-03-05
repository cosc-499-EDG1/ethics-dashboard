import Stakeholder from "../../../node-src/build/models/stakeholder.model";
import http from "../helpers/http";
import  { StakeholderData } from "../stores/stakeholder.store";

export interface StakeholderResponse {
    data: {
        message?: string;
        success?: boolean;
    }
}

class StakeholderService {
    addStakeholder(data: StakeholderData): Promise<StakeholderResponse>{
        return http.post("/stakeholders/addstakeholder", data);
    }
}

export default new StakeholderService();