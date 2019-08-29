import { Router } from 'express';
import { ServiceController } from './service.controller';
import {
  serviceCreateValidator,
  serviceConvertValidator
} from './service.validator';

export class ServiceRouter {
  private r: Router;
  private serviceController = new ServiceController();

  constructor() {
    this.r = Router();
    this.routes();
  }

  private routes() {
    this.r.post('/', serviceCreateValidator, this.serviceController.create);
    this.r.post(
      '/:name',
      serviceConvertValidator,
      this.serviceController.convert
    );
  }

  get router() {
    return this.r;
  }
}
