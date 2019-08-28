import { Router } from 'express';
import { ServiceController } from './service.controller';

export class ServiceRouter {
  private r: Router;
  private serviceController = new ServiceController();

  constructor() {
    this.routes();
  }

  private routes() {
    this.r.post('/', this.serviceController.create);
  }

  get router() {
    return this.r;
  }
}
