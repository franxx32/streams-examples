import { HttpError } from './httpError';

export class ValidationError extends HttpError {
  constructor(opt: any) {
    super(opt, 400);
  }
}
