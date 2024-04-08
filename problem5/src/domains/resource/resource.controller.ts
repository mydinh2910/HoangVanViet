import { Response, Request, NextFunction } from 'express';
import ResourceService from './resource.service';

export default class ResourceController {
  async createResource(req: Request, res: Response, next: NextFunction) {
    const resourceService = new ResourceService();
    const resource = await resourceService.createResource(req.body.name);

    return res.json(resource);
  }

  async deleteResource(req: Request, res: Response, next: NextFunction) {
    const resourceService = new ResourceService();
    await resourceService.deleteResource(req.params.id);

    return res.json({
      status: true,
    });
  }

  async findManyResource(req: Request, res: Response, next: NextFunction) {
    const resourceService = new ResourceService();
    const resources = await resourceService.findManyResource(req.query);

    return res.json(resources);
  }

  async getResource(req: Request, res: Response, next: NextFunction) {
    const resourceService = new ResourceService();
    const resource = await resourceService.getResource(req.params.id);

    return res.json(resource);
  }

  async updateResource(req: Request, res: Response, next: NextFunction) {
    const resourceService = new ResourceService();

    await resourceService.updateResource({
      id: req.params.id,
      updateData: req.body,
    });

    return res.json({
      status: true,
    });
  }
}
