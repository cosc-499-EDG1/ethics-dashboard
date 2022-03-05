import optionController from "../controllers/option.controller";
import { Router } from 'express';

export const options = Router();

options.post('addoption', optionController.create);