import http from '../helpers/http';

class AccountService {
    login<T>(data: LoginData): Promise<T> {
        return http.post('/account/login', data);
    }

    register<T>(data: RegisterData): Promise<T> {
        return http.post('/account/register', data);
    }
}

export default new AccountService();
