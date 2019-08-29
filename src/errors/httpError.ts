export class HttpError extends Error {
  public httpCode: number;
  constructor(opt: any, httpCodeError?: number) {
    super(opt);
    this.httpCode = httpCodeError || 500;
  }
}
