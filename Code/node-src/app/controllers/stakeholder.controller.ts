import dotenv from 'dotenv';
dotenv.config({ path: 'jwt.env' });
import { Request, Response, NextFunction } from 'express';
import Dashboard from '../models/dashboard.model';
import Stakeholder from '../models/stakeholder.model';
import Virtue from '../models/virtue.model';

class StakeholderController {
    updateStakeholders = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.body.id;
        const account = req.account;

        const dashboard = await Dashboard.findByPk(id);
        if (!dashboard) {
            return res.sendStatus(404);
        }

        // If requesting account is a student, then check that they own the dashboard.
        if (account.isStudent() && dashboard.ownerId !== account.id) {
            return res.sendStatus(403);
        }

        const stakeholders = req.body.data;
        const curStakeholders = await dashboard.$get('stakeholders');
        // Create new stakeholders if they don't exist.
        if (stakeholders.length > curStakeholders.length) {
            const stakeholdersToAdd = stakeholders.length - curStakeholders.length;
            for (let i = curStakeholders.length; i < stakeholdersToAdd + curStakeholders.length; i++) {
                const cur = stakeholders[i];
                const sh = new Stakeholder({
                    title: cur.title,
                    description: cur.description,
                    num: i,
                    dashboard_id: dashboard.id,
                });
                await sh.save();
                dashboard.$add('stakeholders', sh);
            }
        }
        // Update existing stakeholders.
        if (curStakeholders.length >= stakeholders.length) {
            for (let i = 0; i < stakeholders.length; i++) {
                const update = stakeholders[i];
                if (!update) {
                    continue;
                }
                curStakeholders[i].set({
                    title: update.title,
                    description: update.description,
                    num: i,
                });
                await curStakeholders[i].save();
            }
        }
        // Delete stakeholders that are no longer needed.
        if (stakeholders.length < curStakeholders.length) {
            for (let i = curStakeholders.length - 1; i > stakeholders.length - 1; i--) {
                const stakeholder = curStakeholders[i];
                dashboard.$remove('stakeholders', stakeholder);
                await stakeholder.destroy();
            }
        }
        await dashboard.save();
        return res.sendStatus(200);
    };

    /**
     * Expects:
     *  stakeholder_num - Stakeholder number to update
     *  virtue - Virtue object to use ({mean, excess, deficiency})
     *  value - Slider value
     */
    updateVirtues = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.body.id;
        const account = req.account;

        const dashboard = await Dashboard.findByPk(id);
        if (!dashboard) {
            return res.sendStatus(404);
        }

        // If requesting account is a student, then check that they own the dashboard.
        if (account.isStudent() && dashboard.ownerId !== account.id) {
            return res.sendStatus(403);
        }

        const { stakeholder_num, virtue, value } = req.body;
        const stakeholders = await dashboard.$get('stakeholders', { include: [{ all: true }] });
        const stakeholder = stakeholders.find(stakeholder => stakeholder.num === stakeholder_num);
        if (!stakeholder) {
            return res.sendStatus(404);
        }

        const v = await Virtue.findByPk(virtue.id);
        if (!v) {
            // Create new virtue
            const newVirtue = await Virtue.create({
                mean: virtue.mean,
                excess: virtue.excess,
                deficiency: virtue.deficiency,
            });
            stakeholder.$set('virtue', newVirtue);
        } else {
            stakeholder.$set('virtue', v);
        }
        stakeholder.virtue_value = value;
        await stakeholder.save();
    };
}

export default new StakeholderController();
