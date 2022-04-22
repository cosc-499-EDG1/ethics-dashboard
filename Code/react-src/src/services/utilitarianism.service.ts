import { NumberLiteralType } from "typescript";
import http, { authHeader } from "../helpers/http";

export interface UtilitarianismResponse {
    data: {
        message: string;
        success:  boolean;
    }
}

class UtilitarianismService {
    updateUtilitarianismShort(data: any): Promise<UtilitarianismResponse>{
        return http.put("/utilitarianism/update-short", data, authHeader());
    }
    
}

export default new UtilitarianismService();