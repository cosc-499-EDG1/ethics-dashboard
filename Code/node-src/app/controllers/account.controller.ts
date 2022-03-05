import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Op } from 'sequelize';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: 'jwt.env' });

import Account from '../models/account/account.model';
import ClassGroup from '../models/classgroup.model';
class AccountController {
    authenticate = async (req: Request, res: Response, next: NextFunction) => {
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

    create = async (req: Request, res: Response, next: NextFunction) => {
        const { username, password, email, first_name, last_name, class_code } = req.body;
        if (!username || !password || !email || !first_name || !last_name || !class_code) {
            res.status(400).send({
                message: 'Invalid form data.',
            });
            return;
        }
        const existing = await Account.findOne({
            where: {
                [Op.or]: [{ username: username }, { email: email }],
            },
        });
        if (existing) {
            res.send({
                message: 'Username or email already exists',
            });
            return;
        }

        const classGroup = await ClassGroup.findOne({
            where: {
                code: class_code,
            },
        });
        if (!classGroup) {
            res.send({
                message: 'Invalid class code',
            });
            return;
        }

        const passwordHash = await bcrypt.hash(password, bcrypt.genSaltSync(10));
        const account = new Account({ username, email, first_name, last_name, type: 'student', password: passwordHash });
        account
            .save()
            .then(async () => {
                account.$add('studentClassList', classGroup);
                res.status(200).json({ message: 'Account created successfully. You may now log in.', success: true });
            })
            .catch(err => {
                res.status(400).json({
                    message: `Error creating user account.`,
                });
            });
    };

    getClassGroups = async (req: Request, res: Response, next: NextFunction) => {
        const account = req.account;
        const student = await account.$get('studentClassList');
        const teaching_assistant = await account.$get('taClassList');
        const instructor = await account.$get('instructorClassList');
        if (!student && !teaching_assistant && !instructor) {
            return res.sendStatus(404);
        }
        return res.send({
            student: student,
            teaching_assistant: teaching_assistant,
            instructor: instructor,
        });
    };

    getDashboards = async (req: Request, res: Response, next: NextFunction) => {
        const account = req.account;
        const dashboards = await (await account.$get('dashboards')).filter(dashboard => !dashboard.deleted);
        if (!dashboards) {
            return res.sendStatus(404);
        }

        return res.send(dashboards);
    };

    findAll = (req: Request, res: Response, next: NextFunction) => {
        //TODO: IMPLEMENT
        return res.sendStatus(200);
    };

    findOne = (req: Request, res: Response, next: NextFunction) => {
        //TODO: IMPLEMENT
        return res.sendStatus(200);
    };

    /**
     * For account security, check the type of req.account in these functions.
     */
    update = async (req: Request, res: Response, next: NextFunction) => {
        //TODO: IMPLEMENT
        return res.sendStatus(200);
    };

    delete = (req: Request, res: Response, next: NextFunction) => {
        const account = req.account;
        if (!account.isAdmin()) {
            return res.sendStatus(403);
        }
        //TODO: IMPLEMENT
        return res.sendStatus(200);
    };
}

export default new AccountController();
