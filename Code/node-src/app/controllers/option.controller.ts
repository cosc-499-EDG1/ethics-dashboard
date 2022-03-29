import { Request, Response, NextFunction } from 'express';
import Dashboard from '../models/dashboard.model';
import Virtue from '../models/virtue.model';

class OptionController {
    getVirtues = async (req: Request, res: Response, next: NextFunction) => {
        const virtues = await Virtue.findAll();
        res.json(virtues);
    };

    /**
     * Expects:
     *  option_num - Option number to update
     *  virtue - Virtue object to use ({mean, excess, deficiency})
     *  value - Slider value
     */
    updateOptionVirtues = async (req: Request, res: Response, next: NextFunction) => {
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

        const { option_num, virtue, value } = req.body;
        const options = await dashboard.$get('options', { include: [{ all: true }] });
        const option = options.find(option => option.option_num === option_num);
        if (!option) {
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
            option.$set('virtue', newVirtue);
        } else {
            option.$set('virtue', v);
        }
        option.virtue_value = value;
        await option.save();
        res.sendStatus(200);
    };
}

export default new OptionController();
