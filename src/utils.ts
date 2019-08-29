import { validationResult } from 'express-validator';
import { ValidationError } from './errors/validationError';
import { Request } from 'express';
import * as Joi from '@hapi/joi';
export const logMessage = (data: any) =>
  // tslint:disable-next-line:no-console
  console.log(data + '   ' + new Date().toISOString());

export const logError = (data: any) =>
  // tslint:disable-next-line: no-console
  console.log(data + '   ' + new Date().toISOString());

export const checkValidatorErrors = (body: any, schema: Joi.JoiObject) => {
  const { error } = Joi.validate(body, schema);
  if (error) {
    throw new ValidationError(error);
  }
};
