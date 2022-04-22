import StakeholderController from '../controllers/stakeholder.controller';
import { Router } from 'express';
import { authorize } from '../middleware/authorize';
import utilitarianismController from '../controllers/utilitarianism.controller';

export const utilitarianism = Router();

utilitarianism.put('/update-short', authorize(), utilitarianismController.updateUtilitarianismShort);