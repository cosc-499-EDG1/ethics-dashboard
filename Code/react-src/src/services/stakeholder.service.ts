import { NumberLiteralType } from "typescript";
import http, { authHeader } from "../helpers/http";

export interface StakeholderResponse {
    data: {
        message: string;
        success: boolean;
    }
}

class StakeholderService {
    updateStakeholders(data: any): Promise<StakeholderResponse>{
        return http.put("/stakeholders/update", data, authHeader());
    }

    getStakeholders(data: {id: number}): Promise<any>{
        return http.get(`/stakeholders/find/${data.id}`, authHeader());
    }

    updateReasoning(data: any): Promise<StakeholderResponse>{
        return http.put('/stakeholders/updateReasoning', data, authHeader());
    }
}

export default new StakeholderService();