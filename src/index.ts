import * as http from 'http';
import { App } from './app';
import { Database } from './database';
import { logError, logMessage } from './utils';
import { resolve } from 'path';
import { config } from 'dotenv';
config({ path: resolve(__dirname, `../env/.${process.env.NODE_ENV}.env`) });

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
