import StakeholderController from '../controllers/stakeholder.controller';
import { Router } from 'express';
import { authorize } from '../middleware/authorize';

export const stakeholders = Router();

stakeholders.put('/update', authorize(), StakeholderController.updateStakeholders);
stakeholders.put('/updateVirtue', authorize(), StakeholderController.updateVirtues);
