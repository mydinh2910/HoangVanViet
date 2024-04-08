import { Router } from 'express';
import { catchError } from '../../middleware/errorHandler';
import { validateDto } from '../../middleware/validateDto';
import * as ResourceDto from './model/resource.dto';
import ResourceController from './resource.controller';

const resourceRoute = Router();
const resourceController = new ResourceController();

resourceRoute.get(
  '/',
  validateDto(ResourceDto.FindManyResource),
  catchError(resourceController.findManyResource),
);

resourceRoute.get(
  '/:id',
  validateDto(ResourceDto.ResourceId),
  catchError(resourceController.getResource),
);

resourceRoute.post(
  '/',
  validateDto(ResourceDto.CreateResource),
  catchError(resourceController.createResource),
);

resourceRoute.delete(
  '/:id',
  validateDto(ResourceDto.ResourceId),
  catchError(resourceController.deleteResource),
);

resourceRoute.put(
  '/:id',
  validateDto(ResourceDto.UpdateResource),
  catchError(resourceController.updateResource),
);

export default resourceRoute;
