import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Op } from 'sequelize';
import Account from '../models/account.model';
import dotenv from 'dotenv';
dotenv.config({ path: 'jwt.env' });

class AccountController {
    authenticate = async (req, res, next) => {
        const { username, password } = req.body;
        if (!username || !password) {
            res.send({
                message: 'No username or password',
            });
            return;
        }

        const account = await Account.scope('withPassword').findOne({ where: { username: username } });

        if (!username || !account || !(await bcrypt.compare(password, account.password))) {
            res.send({
                message: 'Invalid username or password',
            });
            return;
        }
        account.password = '';
        const token = jwt.sign({ sub: account.id }, process.env.JSON_WEB_TOKEN_SECRET ?? '12345', { expiresIn: '7d' });
        res.send({ account, token });
    };

    create = async (req, res, next) => {
        const { username, password, email } = req.body;
        const existing = await Account.findOne({ where: {
            [Op.or]: [
              { username: username },
              { email: email }
            ]
        }});
        if (existing) {
            res.send({
                message: 'Username or email already exists',
            });
            return;
        }
        const passwordHash = await bcrypt.hash(password, bcrypt.genSaltSync(10));
        const account = new Account({ ...req.body, type: 'student', password: passwordHash });
        account
            .save()
            .then(() => {
                res.status(200).json({ message: 'Account created successfully. You may now log in.', success: true });
            })
            .catch(err => {
                res.status(400).json({
                    message: `Error creating user account.`,
                });
            });
    };

    findAll = (req, res, next) => {
        //TODO: IMPLEMENT
        return res.sendStatus(200);
    };

    findOne = (req, res, next) => {
        //TODO: IMPLEMENT
        return res.sendStatus(200);
    };

    /**
     * For account security, check the type of req.account in these functions.
     */
    update = async (req, res, next) => {
        //TODO: IMPLEMENT
        return res.sendStatus(200);
    };

    delete = (req, res, next) => {
        const account = req.account as Account;
        if (!account.type || !account.isAdmin()) {
            return res.sendStatus(403);
        }
        //TODO: IMPLEMENT
        return res.sendStatus(200);
    };
}

export default new AccountController();
