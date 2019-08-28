export const logMessage = (data: any) =>
  // tslint:disable-next-line:no-console
  console.log(data + new Date().toISOString());

export const logError = (data: any) =>
  // tslint:disable-next-line: no-console
  console.log(data + new Date().toISOString());
