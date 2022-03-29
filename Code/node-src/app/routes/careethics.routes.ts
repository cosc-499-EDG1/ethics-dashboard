import StakeholderController from '../controllers/stakeholder.controller';
import { Router } from 'express';
import { authorize } from '../middleware/authorize';

export const careethics = Router();

careethics.put('/update', authorize(), StakeholderController.updateCareEthics);
