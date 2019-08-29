import { HttpError } from './httpError';

export class ValidationError extends HttpError {
  constructor(opt: any, httpCode = 400) {
    super(opt, httpCode);
  }
}
