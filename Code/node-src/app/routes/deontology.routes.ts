import DeontologyController from "../controllers/deontology.controller";
import { Router } from 'express';

export const deontologies = Router();

deontologies.post('/adddeontology', DeontologyController.create);