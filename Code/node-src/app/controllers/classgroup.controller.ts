import dotenv from 'dotenv';
dotenv.config({ path: 'jwt.env' });
import { Request, Response, NextFunction } from 'express';

import Account from '../models/account/account.model';
import ClassGroup from '../models/classgroup.model';

class ClassGroupController {
    create = async (req: Request, res: Response, next: NextFunction) => {
        const account = req.account;
        if (!account.type || (!account.isAdmin() && !account.isProfessor())) {
            return res.sendStatus(403);
        }

        const { class_code, name } = req.body;
        if (!class_code || !name) {
            res.status(400).send({
                message: 'Invalid form data.',
            });
            return;
        }

        const existing = await ClassGroup.findOne({
            where: {
                code: class_code,
            },
        });
        if (existing) {
            res.send({
                message: 'Duplicate class code',
            });
            return;
        }

        const classGroup = new ClassGroup({ code: class_code, name });
        classGroup
            .save()
            .then(() => {
                res.status(200).json({ message: 'Class created successfully', success: true });
            })
            .catch(err => {
                res.status(400).json({
                    message: `Error creating class`,
                });
            });
    };

    findAll = (req: Request, res: Response, next: NextFunction) => {
        //TODO: IMPLEMENT
        return res.sendStatus(200);
    };

    findOne = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id;

        const classGroup = await ClassGroup.findByPk(id);
        if (!classGroup) {
            return res.sendStatus(404);
        }

        return res.send(classGroup);
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

export default new ClassGroupController();
