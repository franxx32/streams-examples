import { Request } from 'express';
import { IService } from '../modules/service/service.model';

export interface IRequestWithService extends Request {
  service: IService;
}
