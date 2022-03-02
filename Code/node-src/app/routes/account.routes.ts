import AccountController from '../controllers/account.controller';
import { authorize } from '../middleware/authorize';
import { Router } from 'express';

export const accounts = Router();

// Creation
accounts.post('/register', AccountController.create);
// Login
accounts.post('/login', AccountController.authenticate);

// Retrieve all accounts
accounts.get('/', authorize(), AccountController.findAll);

// Retrieve a single account by id
accounts.get('/find/:id', authorize(), AccountController.findOne);

// Update an account with id
accounts.put('/update/:id', authorize(), AccountController.update);

// Delete an account with id
accounts.delete('/delete/:id', authorize(), AccountController.delete);

// Retrieve class groups for own account
accounts.get('/classes', authorize(), AccountController.getClassGroups);

// Retrieve dashboards for own account
accounts.get('/dashboards', authorize(), AccountController.getDashboards);
