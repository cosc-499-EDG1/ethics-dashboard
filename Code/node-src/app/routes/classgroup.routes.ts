import ClassGroupController from '../controllers/classgroup.controller';
import { authorize } from '../middleware/authorize';
import { Router } from 'express';

export const classGroups = Router();

// Creation
classGroups.post('/create', authorize(), ClassGroupController.create);

// Retrieve all class groups
classGroups.get('/', authorize(), ClassGroupController.findAll);

// Retrieve a single group by id
classGroups.get('/find/:id', authorize(), ClassGroupController.findOne);

// Update a group with id
classGroups.put('/update/:id', authorize(), ClassGroupController.update);

// Delete a group with id
classGroups.delete('/delete/:id', authorize(), ClassGroupController.delete);
