import dotenv from 'dotenv';
dotenv.config({ path: 'jwt.env' });
import { Request, Response, NextFunction } from 'express';
import Dashboard from '../models/dashboard.model';
import MoralLaw from '../models/morallaw.model';

class DeontologyController {
    updateOption = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.body.id;
        const account = req.account;

        const dashboard = await Dashboard.findByPk(id);
        if (!dashboard) {
            return res.sendStatus(404);
        }

        // If requesting account is a student, then check that they own the dashboard.
        if (account?.isStudent() && dashboard.ownerId !== account.id) {
            return res.sendStatus(403);
        }

        const { option_num } = req.body;
        if (!option_num) {
            return res.status(400).send({
                message: 'Invalid form data.',
            });
        }
        return res.sendStatus(200);
    };

    updateMoralLaw = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.body.id;
        const account = req.account;

        const dashboard = await Dashboard.findByPk(id);
        if (!dashboard) {
            return res.sendStatus(404);
        }

        // If requesting account is a student, then check that they own the dashboard.
        if (account?.isStudent() && dashboard.ownerId !== account.id) {
            return res.sendStatus(403);
        }

        const { option_num } = req.body;
        if (!option_num) {
            return res.status(400).send({
                message: 'Invalid form data.',
            });
        }
        return res.sendStatus(200);
    };
}

export default new DeontologyController();