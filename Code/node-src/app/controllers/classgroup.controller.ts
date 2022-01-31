import dotenv from 'dotenv';
dotenv.config({ path: 'jwt.env' });

import Account from '../models/account/account.model';
import ClassGroup from '../models/classgroup.model';

class ClassGroupController {
    create = async (req, res, next) => {
        const account = req.account as Account;
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

        const rest: any = {};
        const classGroup = new ClassGroup({ ...rest, code: class_code, name });
        classGroup
            .save()
            .then(() => {
                res.status(200).json({ message: 'Class created successfully.', success: true });
            })
            .catch(err => {
                res.status(400).json({
                    message: `Error creating class`,
                });
            });
    };

    findAll = (req, res, next) => {
        //TODO: IMPLEMENT
        return res.sendStatus(200);
    };

    findOne = (req, res, next) => {
        //TODO: IMPLEMENT
        return res.sendStatus(200);
    };

    update = async (req, res, next) => {
        //TODO: IMPLEMENT
        return res.sendStatus(200);
    };

    delete = (req, res, next) => {
        //TODO: IMPLEMENT
        return res.sendStatus(200);
    };
}

export default new ClassGroupController();
