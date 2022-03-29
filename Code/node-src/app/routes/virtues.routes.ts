import { Router } from 'express';
import { authorize } from '../middleware/authorize';
import optionController from '../controllers/option.controller';

export const virtues = Router();

virtues.put('/update', authorize(), optionController.updateOptionVirtues);
virtues.get('/fetchVirtues', authorize(), optionController.getVirtues);
