import dotenv from 'dotenv';
dotenv.config({ path: 'jwt.env' });
import { Request, Response, NextFunction } from 'express';
import { getSystemErrorMap } from 'util';
import Care_Ethics_Options from '../models/care_ethics_options.model';
import Dashboard from '../models/dashboard.model';
import Stakeholder from '../models/stakeholder.model';
import dashboardController from './dashboard.controller';


class StakeholderController {
    updateStakeholders = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.body.id;
        const account = req.account;

        const dashboard = await Dashboard.findByPk(id);
        console.log("--------------" + dashboard);
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
                    num: i + 1,
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

    updateReasoning = async(req: Request, res: Response, next: NextFunction) => {
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
        const updReasons  = req.body.reasoning;
        const curStakeholders = await dashboard.$get('stakeholders');

        const util = require('util')
        //console.log("Booooooooooooooooooooooooooooo" + req.body.data.toString()); 
        console.log(util.inspect(req.body, {showHidden: false, depth: null, colors: true}))

        for(let i = 0; i < curStakeholders.length; i++){
            const reason = updReasons[i];
            console.log(reason);
            curStakeholders[i].set({
                util_reason: reason, 
            });
            await curStakeholders[i].save();
        }
        return res.sendStatus(200);
    };

    findStakeholders = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id;
        const account = req.account;

        const dashboard = await Dashboard.findByPk(id);
        if (!dashboard) {
            return res.sendStatus(404).json({
                dashboard,
            });
        }

        if (account.isStudent() && dashboard.ownerId !== account.id) {
            return res.sendStatus(403);
        }
        const stakeholders = await dashboard.$get('stakeholders');

        res.status(200).json({
            stakeholders,
        });
    };


    updateCareEthics = async (req: Request, res: Response, next: NextFunction) => {
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

        const { option_num, attentiveness, competence, responsiveness } = req.body;
        if (!option_num || !attentiveness || !competence || !responsiveness) {
            return res.status(400).send({
                message: 'Invalid form data.',
            });
        }

        const curOptions = await dashboard.$get('options', {
            include: [{ all: true }],
        });
        const option = curOptions[option_num - 1];
        if (!option) {
            return res.status(404).send({
                message: 'Option not found.',
            });
        }

        const stakeholders = await dashboard.$get('stakeholders');

        const existingCareEthics = await option.$get('care_ethics_options');

        for (let i = 0; i < stakeholders.length; i++) {
            const att = attentiveness[i] ?? 5;
            const comp = competence[i] ?? 5;
            const resp = responsiveness[i] ?? 5;
            const stakeholder = stakeholders[i];

            // Check for existing option.
            if (existingCareEthics[i]) {
                existingCareEthics[i].set({
                    attentiveness: att,
                    competence: comp,
                    responsiveness: resp,
                });
                await existingCareEthics[i].save();
            } else {
                const careOption = new Care_Ethics_Options({
                    attentiveness: att,
                    competence: comp,
                    responsiveness: resp,
                    option_num: option.option_num,
                    option_id: option.id,
                    stakeholder_id: stakeholder.id,
                });
                await careOption.save();
                option.$add('care_ethics_options', careOption);
            }
        }
        await option.save();
        await dashboard.save();
        return res.sendStatus(200);
    };

}

export default new StakeholderController();
