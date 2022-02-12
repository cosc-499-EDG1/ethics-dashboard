import DashboardController from '../controllers/dashboard.controller';
import { authorize } from '../middleware/authorize';
import { Router } from 'express';

export const dashboards = Router();

// Creation
dashboards.post('/create', authorize(), DashboardController.create);

// Retrieve all class groups
dashboards.get('/', authorize(), DashboardController.findAll);

// Retrieve a single group by id
dashboards.get('/find/:id', authorize(), DashboardController.findOne);

// Update a group with id
dashboards.put('/update/:id', authorize(), DashboardController.update);

// Delete a group with id
dashboards.delete('/delete/:id', authorize(), DashboardController.delete);
