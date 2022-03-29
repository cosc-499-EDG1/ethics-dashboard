import http, { authHeader } from "../helpers/http";

export interface StakeholderResponse {
  data: {
    message?: string;
    success?: boolean;
  };
}

class StakeholderService {
  updateStakeholders(data: any): Promise<StakeholderResponse> {
    return http.put("/stakeholders/update", data, authHeader());
  }

  updateVirtues(data: {
    stakeholder_num: number;
    virtue: {
      id?: number;
      mean?: string;
      excess?: string;
      deficiency?: string;
    };
    value: number;
  }): Promise<StakeholderResponse> {
    return http.put("/stakeholders/updateVirtues", data, authHeader());
  }
}

export default new StakeholderService();
