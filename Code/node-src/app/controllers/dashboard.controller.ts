import dotenv from 'dotenv';
dotenv.config({ path: 'jwt.env' });
import { Request, Response, NextFunction } from 'express';

import Dashboard from '../models/dashboard.model';

class DashboardController {
    create = async (req: Request, res: Response, next: NextFunction) => {
        const { name } = req.body;
        if (!name) {
            res.status(400).send({
                message: 'Invalid form data.',
            });
            return;
        }

        const account = req.account;

        const dashboard = new Dashboard({ name: name });
        dashboard
            .save()
            .then(() => {
                account.$add('dashboards', dashboard);
                res.status(200).json({ message: 'Dashboard created successfully', success: true });
            })
            .catch(err => {
                res.status(400).json({
                    message: `Error creating dashboard`,
                });
            });
    };

    findAll = (req: Request, res: Response, next: NextFunction) => {
        //TODO: IMPLEMENT
        return res.sendStatus(200);
    };

    findOne = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id;
        const account = req.account;

        const dashboard = await Dashboard.findByPk(id);
        if (!dashboard) {
            return res.sendStatus(404);
        }

        // If requesting acocund is a student, then check that they own the dashboard.
        if (account.isStudent() && dashboard.ownerId !== account.id) {
            return res.sendStatus(403);
        }

        const options = await dashboard.$get('options');
        dashboard.options = options;
        return res.send(dashboard);
    };

    update = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id;
        const account = req.account;

        const dashboard = await Dashboard.findByPk(id);
        if (!dashboard) {
            return res.sendStatus(404);
        }

        // If requesting acocund is a student, then check that they own the dashboard.
        if (account.isStudent() && dashboard.ownerId !== account.id) {
            return res.sendStatus(403);
        }

        const updateType = req.body.updateType;

        switch (updateType) {
            case 'name':
                const { name } = req.body;
                if (!name) {
                    return res.status(400).send({
                        message: 'Invalid form data.',
                    });
                }
                dashboard.set({ name: name });
                break;
            case 'data':
                const { summary, dilemmas, role, options } = req.body;
                if (!summary || !dilemmas || !role || !options) {
                    return res.status(400).send({
                        message: 'Invalid form data.',
                    });
                }
                dashboard.set({ summary: summary, dilemmas: dilemmas, role: role });
                break;
            default:
                return res.status(400).send({
                    message: 'Invalid update type.',
                });
        }

        await dashboard.save();
        return res.sendStatus(200);
    };

    delete = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id;
        const account = req.account;

        const dashboard = await Dashboard.findByPk(id);
        if (!dashboard) {
            return res.sendStatus(404);
        }

        // If requesting acocund is a student, then check that they own the dashboard.
        if (account.isStudent() && dashboard.ownerId !== account.id) {
            return res.sendStatus(403);
        }

        dashboard.set({ deleted: true });
        await dashboard.save();
        return res.sendStatus(200);
    };
}

export default new DashboardController();
