import * as http from 'http';
import { App } from './app';

const app = new App();

const server = http.createServer(app.application);

server.listen(app.port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started! >> ${app.port}`);
});
