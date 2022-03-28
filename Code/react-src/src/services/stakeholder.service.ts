import http, { authHeader } from "../helpers/http";

export interface StakeholderResponse {
    data: {
        message?: string;
        success?: boolean;
    }
}

class StakeholderService {
    updateStakeholders(data: any): Promise<StakeholderResponse>{
        return http.put("/stakeholders/update", data, authHeader());
    }
}

export default new StakeholderService();