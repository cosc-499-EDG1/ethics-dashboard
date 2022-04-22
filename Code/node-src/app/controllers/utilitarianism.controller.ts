import dotenv from 'dotenv';
dotenv.config({ path: 'jwt.env' });
import { Request, Response, NextFunction } from 'express';
import { getSystemErrorMap } from 'util';
import Dashboard from '../models/dashboard.model';
import Util_Opt_Analysis from '../models/util_opt_analysis.model';

class UtilitarianismController {
    updateUtilitarianismShort = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.body.id;
        const account = req.account;

        const dashboard = await Dashboard.findByPk(id);
        console.log("--------------" + dashboard);
        if (!dashboard) {
            return res.sendStatus(404);
        }
        if (account.isStudent() && dashboard.ownerId !== account.id) {
            return res.sendStatus(403);
        }

        const new_util_data = req.body.data;
        const committed_util_data = await dashboard.$get('util_opt_analysis');

        //create new util_opt_analysis records if they don't exist.
        if(new_util_data.length > committed_util_data.length){
            const util_opt_to_add = new_util_data.length - committed_util_data.length;
            for(let i = committed_util_data.length; i < util_opt_to_add + committed_util_data.length; i++) {
                const cur = new_util_data[i];
                const UOA = new Util_Opt_Analysis({
                    stakeholder_num: cur.stakeholder_num,
                    short_amount: cur.short_amount,
                    short_explanation: cur.short_explanation,
                    short_pleasure: cur.short_pleasure,
                    dashboard_id: dashboard.id,
                    options_id: cur.options_id,
                });
                await UOA.save();
                dashboard.$add('util_opt_analysis', UOA);
            }
        }
    };
}

export default new UtilitarianismController();