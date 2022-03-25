import http from "../helpers/http";

export interface StakeholderResponse {
    data: {
        message?: string;
        success?: boolean;
    }
}

class StakeholderService {
    addStakeholder(data: any): Promise<StakeholderResponse>{
        return http.post("/stakeholders/addstakeholder", data);
    }
}

export default new StakeholderService();