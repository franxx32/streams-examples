import * as express from 'express';
import * as bodyParser from 'body-parser';

export class App {
  private app: express.Application;

  constructor(port?: number) {
    this.app = express();
    this.app.set('port', port || 1337);
    this.config();
    this.routes();
  }

  private config() {
    this.app.use(bodyParser.json());
  }

  private routes() {
    this.app.get('/', (r, s) => {
      s.send('Hello world');
    });
  }

  get port() {
    return this.app.get('port');
  }
  get application() {
    return this.app;
  }
}
