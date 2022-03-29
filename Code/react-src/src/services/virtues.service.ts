import http, { authHeader } from "../helpers/http";

class VirtuesService {
  getVirtues(): Promise<{ data: any }> {
    return http.get("/virtues/fetchVirtues", authHeader());
  }

  updateOptionVirtues(data: {
    id: number;
    option_num: number;
    virtue: {
      id?: number;
      mean?: string;
      excess?: string;
      deficiency?: string;
    };
    value: number;
  }): Promise<{ data: any }> {
    return http.put("/virtues/update", data, authHeader());
  }
}

export default new VirtuesService();
