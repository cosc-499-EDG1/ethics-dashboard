import http from '../helpers/http';

class AccountService {
    login(data: { email: string, password: string }) {
        return http.post('/account/login', data);
    }
}

export default new AccountService();
