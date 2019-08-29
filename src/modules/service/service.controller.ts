import Service from './service.model';

import { Request, Response } from 'express';
export class ServiceController {
  public async create(req: Request, res: Response) {
    const { name, tasks } = req.body;
    const service = new Service({ name, tasks });
    const savedService = await service.save();
    res.json(savedService);
  }
}
