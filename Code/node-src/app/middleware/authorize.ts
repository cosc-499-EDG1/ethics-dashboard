import jwt from 'express-jwt';
import { secret } from '../config/jwt.config';
import Account from '../models/account.model';

function authorize() {
    return [
        jwt({ secret, algorithms: ['HS256'] }),
        async (req, res, next) => {
            const account = await Account.findByPk(req.user.sub);

            if (!account) return res.status(401).json({ message: 'Unauthorized' });

            req.account = account;
            next();
        },
    ];
}

export { authorize };
