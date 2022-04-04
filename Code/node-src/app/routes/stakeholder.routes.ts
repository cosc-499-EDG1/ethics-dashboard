import StakeholderController from '../controllers/stakeholder.controller';
import { Router } from 'express';
import { authorize } from '../middleware/authorize';

export const stakeholders = Router();

stakeholders.put('/update', authorize(), StakeholderController.updateStakeholders);

stakeholders.get('/find/:id', authorize(), StakeholderController.findStakeholders);

stakeholders.put('/updateReasoning', authorize(), StakeholderController.updateReasoning);
