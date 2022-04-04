import dotenv from 'dotenv';
dotenv.config({ path: 'jwt.env' });
import { Request, Response, NextFunction } from 'express';
import CaseOption from '../models/option.model';
import Dashboard from '../models/dashboard.model';
import Stakeholder from '../models/stakeholder.model';
import Care_Ethics_Options from '../models/care_ethics_options.model';

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

        const dashboard = await Dashboard.findByPk(id, {
            include: [{ all: true, nested: true }],
        });
        if (!dashboard) {
            return res.sendStatus(404);
        }

        // If requesting acocund is a student, then check that they own the dashboard.
        if (account.isStudent() && dashboard.ownerId !== account.id) {
            return res.sendStatus(403);
        }
        res.status(200).json(dashboard);
    };

    update = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id;
        const account = req.account;

        const dashboard = await Dashboard.findByPk(id);
        if (!dashboard) {
            return res.sendStatus(404);
        }

        // If requesting account is a student, then check that they own the dashboard.
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
                const curOptions = await dashboard.$get('options');
                // Create new options if they don't exist.
                if (options.length > curOptions.length) {
                    const optionsToAdd = options.length - curOptions.length;
                    for (let i = curOptions.length; i < optionsToAdd + curOptions.length; i++) {
                        const desc = options[i];
                        const opt = new CaseOption({
                            option_title: `Option ${i + 1}`,
                            option_desc: desc,
                            option_num: i + 1,
                            dashboard_id: dashboard.id,
                        });
                        await opt.save();
                        dashboard.$add('options', opt);
                    }
                }
                // Update existing options.
                if (curOptions.length >= options.length) {
                    for (let i = 0; i < options.length; i++) {
                        const update = options[i];
                        if (!update) {
                            continue;
                        }
                        curOptions[i].set({
                            option_title: `Option ${i + 1}`,
                            option_desc: update,
                            option_num: i + 1,
                        });
                        await curOptions[i].save();
                    }
                }

                // Delete options that are no longer needed.
                if (options.length < curOptions.length) {
                    for (let i = curOptions.length - 1; i > options.length - 1; i--) {
                        const option = curOptions[i];
                        dashboard.$remove('options', option);
                        await option.destroy();
                    }
                }
                dashboard.set({ summary: summary, dilemmas: dilemmas, role: role });
                break;
            case 'consequences':
                const { optionShortConsequences, optionLongConsequences } = req.body;
                const currentOptions = await dashboard.$get('options');
                for (let i = 0; i < currentOptions.length; i++) {
                    currentOptions[i].set({
                        short_consequences: optionShortConsequences[i],
                        long_consequences: optionLongConsequences[i],
                    });
                    await currentOptions[i].save();
                }
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
