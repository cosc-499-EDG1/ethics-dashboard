import dotenv from 'dotenv';
dotenv.config({ path: 'jwt.env' });
import { Request, Response, NextFunction } from 'express';
import { useStoreState, State} from "../../../react-src/node_modules/easy-peasy";
import Deontology_Categorical from '../models/deontology_categorical.model';
import Dashboard from '../models/dashboard.model';
import  {DashboardModel, DashboardData } from '../../../react-src/src/stores/dashboard.store';

class DeontologyController {

    create = async (req: Request, res: Response, next: NextFunction) => {
        const {motivations, description, moral_law_1, moral_law_2, moral_law_3, moral_law_4, moral_law_5} = req.body;
        if (!motivations || !description || !moral_law_1) {
            res.status(400).send({
                message: 'Invalid form data.',
            });
            return;  
        }
        const account = req.account;
        const dash = useStoreState((state: State<DashboardModel>) => state.dashboard_id);

        const deontology = new Deontology_Categorical({motivations: motivations, deontology_categorical_desc: description, moral_law_1: moral_law_1, moral_law_2: moral_law_2, moral_law_3: moral_law_3, moral_law_4: moral_law_4, moral_law_5: moral_law_5,  dashboard_id: dash});
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