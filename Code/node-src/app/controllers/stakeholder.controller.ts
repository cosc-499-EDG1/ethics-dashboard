import dotenv from 'dotenv';
dotenv.config({ path: 'jwt.env' });
import { Request, Response, NextFunction } from 'express';
import { useStoreState, State} from "../../../react-src/node_modules/easy-peasy";
import Stakeholder from "../models/stakeholder.model";
import Dashboard from '../models/dashboard.model';
import  {DashboardModel, DashboardData } from '../../../react-src/src/stores/dashboard.store'

class StakeholderController {



    create = async (req: Request, res: Response, next: NextFunction) => {
        const {title, description, number} = req.body;
        if (!title || !description || !number) {
            res.status(400).send({
                message: 'Invalid form data.',
            });
            return;  
        }
        const account = req.account;
        const dash = useStoreState((state: State<DashboardModel>) => state.dashboard_id);

        const stakeholder = new Stakeholder({stakeholder_title: title, stakeholder_desc: description, stakeholder_num: number, dashboard_id: dash});
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