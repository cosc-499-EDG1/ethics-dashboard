import dotenv from 'dotenv';
dotenv.config({path: 'jwt.env'});
import { Request, Response, NextFunction } from 'express';
import Option from "../models/option.model";

class OptionController {

    create = async (req: Request, res: Response, next: NextFunction) => {
        const {title, description, number, dashboard_id} = req.body;
        if (!title || !description || !number || !dashboard_id) {
            res.status(400).send({
                message: 'Invalid form data.',
            });
            return;  
        }

        const opt = new Option({option_title: title, option_desc: description, option_num: number, dashboard_id: dashboard_id});
        opt.save().then( async () => {
            res.status(200).json({ message: 'Option created successfully.', success: true});
        }).catch(err => {
            res.status(400).json({
                message: 'Error creating option' , 
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

export default new OptionController();