import StakeholderController from "../controllers/stakeholder.controller";
import { Router } from 'express';

export const stakeholders = Router();

stakeholders.post('/addstakeholder', StakeholderController.create); 