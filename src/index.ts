import * as http from 'http';
import { App } from './app';
import { Database } from './database';
import { logMessage } from './utils';
import { resolve } from 'path';
import { config } from 'dotenv';
config({ path: resolve(__dirname, '../.env') });

const app = new App();

const db = new Database();
const server = http.createServer(app.application);

db.connect()
  .then(data => {
    server.listen(app.port, () => {
      logMessage(`Server started! >> ${app.port}`);
    });
  })
  .catch(error => {
    process.exit(1);
  });
