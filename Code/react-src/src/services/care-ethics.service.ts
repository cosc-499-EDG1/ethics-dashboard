import http, { authHeader } from "../helpers/http";

export interface CareEthicsResponse {
    data: {
        message?: string;
        success?: boolean;
    }
}

class CareEthicsService {
    updateCareEthics(data: any): Promise<CareEthicsResponse>{
        return http.put("/care-ethics/update", data, authHeader());
    }
}

export default new CareEthicsService();