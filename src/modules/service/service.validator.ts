import { Request, Response, NextFunction } from 'express';
import { ServiceTask } from './service.model';
import { checkValidatorErrors } from '../../utils';
import * as Joi from '@hapi/joi';
import Service from './service.model';
import { ValidationError } from '../../errors/validationError';
import { IRequestWithService } from '../../interfaces/httpInterfaces';

export const serviceCreateValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    tasks: Joi.array().items(Object.keys(ServiceTask))
  });

  checkValidatorErrors(body, schema);
  const service = await Service.findOne({
    name: body.name
  });
  if (service) {
    throw new ValidationError('This service is already exist');
  }
  next();
};

export const serviceConvertValidator = async (
  req: IRequestWithService,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.params;

  const service = await Service.findOne({ name });
  if (!service) {
    throw new ValidationError(`Service with name "${name}" not found`, 404);
  }
  req.service = service;
  next();
};
