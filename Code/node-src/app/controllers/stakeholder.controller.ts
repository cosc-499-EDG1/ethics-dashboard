import dotenv from 'dotenv';
dotenv.config({ path: 'jwt.env' });
import { Request, Response, NextFunction } from 'express';
import Stakeholder from "../models/stakeholder.model";

class StakeholderController {



    create = async (req: Request, res: Response, next: NextFunction) => {
        const {title, description, num, dashboard_id} = req.body;
        if (!title || !description || !num || dashboard_id === undefined) {
            res.status(400).send({
                message: 'Invalid form data.',
            });
            return;  
        }

        const stakeholder = new Stakeholder({stakeholder_title: title, stakeholder_desc: description, stakeholder_num: num, dashboard_id: dashboard_id});
        stakeholder.save().then(async () => {
            res.status(200).json({ message: 'Stakeholder created successfully.', success: true});
        })
        .catch(err => {
            res.status(400).json({
                message: 'Error creating stakeholder' , 
            });
        });
    };

    findAll = async (req: Request, res: Response, next: NextFunction) => {
        //TODO: IMPLEMENT
        return res.sendStatus(200);
    };

    findOne = async (req: Request, res: Response, next: NextFunction) => {

    };

    update = async (req: Request, res: Response, next: NextFunction) => {
        //TODO: IMPLEMENT
        return res.sendStatus(200);
    };

    delete = (req: Request, res: Response, next: NextFunction) => {
        //TODO: IMPLEMENT
        return res.sendStatus(200);
    };
}

export default new StakeholderController();