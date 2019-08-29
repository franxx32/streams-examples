import { Request, Response, NextFunction } from 'express';
import { HttpError } from './httpError';
export const routerErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.httpCode).json({ errors: err.message });
};
