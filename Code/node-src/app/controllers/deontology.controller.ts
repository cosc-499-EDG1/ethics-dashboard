import dotenv from 'dotenv';
dotenv.config({ path: 'jwt.env' });
import { Request, Response, NextFunction } from 'express';
import Deontology_Categorical from '../models/deontology_categorical.model';

class DeontologyController {

    create = async (req: Request, res: Response, next: NextFunction) => {
        const {motivations, description, moral_law_1, moral_law_2, moral_law_3, moral_law_4, moral_law_5, dashboard_id} = req.body;
        if (!motivations || !description || !moral_law_1 || !dashboard_id) {
            res.status(400).send({
                message: 'Invalid form data.',
            });
            return;  
        }

        const deontology = new Deontology_Categorical({motivations: motivations, deontology_categorical_desc: description, moral_law_1: moral_law_1, moral_law_2: moral_law_2, moral_law_3: moral_law_3, moral_law_4: moral_law_4, moral_law_5: moral_law_5,  dashboard_id: dashboard_id});
        deontology.save().then(async () => {
            res.status(200).json({ message: 'Deontology created successfully.', success: true});
        })
        .catch(err => {
            res.status(400).json({
                message: 'Error creating deontology' , 
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

export default new DeontologyController();