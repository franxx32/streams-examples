import { Request, Response, NextFunction } from 'express';
import { ServiceTask } from './service.model';
import { checkValidatorErrors } from '../../utils';
import * as Joi from '@hapi/joi';
import Service from './service.model';
import { ValidationError } from '../../errors/validationError';

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
