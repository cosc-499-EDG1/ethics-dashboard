import http, { authHeader } from "../helpers/http";
export interface DashboardCreateReponse {
  data: {
    message: string;
    success: boolean;
  };
}

interface UpdateDashboardData {
  id: number;
  updateType: string;
  [key: string]: any;
}

class DashboardService {
  createDashboard(data: { name: string }): Promise<DashboardCreateReponse> {
    return http.post("/dashboard/create", data, authHeader());
  }

  deleteDashboard(data: { id: number }): Promise<any> {
    return http.delete(`/dashboard/delete/${data.id}`, authHeader());
  }

  updateDashboard(data: UpdateDashboardData): Promise<any> {
    return http.put(`/dashboard/update/${data.id}`, data, authHeader());
  }

  getDashboard(data: { id: number }): Promise<any> {
    return http.get(`/dashboard/find/${data.id}`, authHeader());
  }
}

export default new DashboardService();
