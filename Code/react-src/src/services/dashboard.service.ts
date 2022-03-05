import http, { authHeader } from "../helpers/http";
export interface DashboardCreateReponse {
  data: {
    message: string;
    success: boolean;
  };
}
class DashboardService {
  createDashboard(data: { name: string }): Promise<DashboardCreateReponse> {
    return http.post("/dashboard/create", data, authHeader());
  }

  deleteDashboard(data: { id: number }): Promise<any> {
    return http.delete(`/dashboard/delete/${data.id}`, authHeader());
  }

  updateDashboard(data: { id: number, name: string }): Promise<any> {
    return http.put(`/dashboard/update/${data.id}`, data, authHeader());
  }
}

export default new DashboardService();
