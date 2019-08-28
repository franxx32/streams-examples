import * as http from 'http';
import { App } from './app';
import { Database } from './database';
import { logError, logMessage } from './utils';
const app = new App();

const db = new Database();
const server = http.createServer(app.application);

db.connect()
  .then(data => {
    logMessage(data);
    server.listen(app.port, () => {
      logMessage(`Server started! >> ${app.port}`);
    });
  })
  .catch(error => {
    logError(error);
    process.exit(1);
  });
