import jwt from 'express-jwt';
import Account from '../models/account/account.model';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: 'jwt.env' });

function authorize() {
    return [
        jwt({ secret: process.env.JSON_WEB_TOKEN_SECRET ?? '12345', algorithms: ['HS256'] }),
        async (req: Request, res: Response, next: NextFunction) => {
            const account = await Account.findByPk(req.user?.sub);

            if (!account) return res.status(401).json({ message: 'Unauthorized' });

            req.account = account;
            next();
        },
    ];
}

export { authorize };
