import DashboardController from '../controllers/dashboard.controller';
import { authorize } from '../middleware/authorize';
import { Router } from 'express';

export const dashboards = Router();

// Creation
dashboards.post('/create', authorize(), DashboardController.create);

// Retrieve all dashboards
dashboards.get('/', authorize(), DashboardController.findAll);

// Retrieve a single dashboard by id
dashboards.get('/find/:id', authorize(), DashboardController.findOne);

// Update a dashboard with id
dashboards.put('/update/:id', authorize(), DashboardController.update);

// Delete a dashboard with id
dashboards.delete('/delete/:id', authorize(), DashboardController.delete);
