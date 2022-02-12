interface RequestUser {
    sub: number;
}
declare namespace Express {
    export interface Request {
        user?: RequestUser;
        account: Omit<import('../app/models/account/account.model').default, 'password'>;
    }
}
