import http from '../helpers/http';

class AccountService {
    login<T>(data: LoginData): Promise<T> {
        return http.post('/account/login', data);
    }
}

export default new AccountService();
