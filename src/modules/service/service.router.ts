import { Router } from 'express';
import { ServiceController } from './service.controller';
import { serviceCreateValidator } from './service.validator';

export class ServiceRouter {
  private r: Router;
  private serviceController = new ServiceController();

  constructor() {
    this.r = Router();
    this.routes();
  }

  private routes() {
    this.r.post('/', serviceCreateValidator, this.serviceController.create);
  }

  get router() {
    return this.r;
  }
}
