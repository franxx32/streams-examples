import { Request, Response, NextFunction } from 'express';
import { HttpError } from './httpError';
import { logError } from '../utils';
export const routerErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HttpError) {
    res.status(err.httpCode).json({ errors: err.message });
    return;
  }
  logError(err);
  res.status(500).json({ errors: 'Something went wrong...' });
};
