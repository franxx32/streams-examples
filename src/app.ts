import * as express from 'express';
import * as bodyParser from 'body-parser';
import { ServiceRouter } from './modules/service/service.router';
import { routerErrorHandler } from './errors/errorsHandlerMiddleware';
import 'express-async-errors';

export class App {
  private app: express.Application;
  private serviceRouter = new ServiceRouter();

  constructor(port?: number) {
    this.app = express();
    this.app.set('port', port || 1337);
    this.config();
    this.routes();
  }

  private config() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.raw());
  }

  private routes() {
    this.app.get('/ping', (req, res) => {
      res.send('pong');
    });
    this.app.use('/services', this.serviceRouter.router);
    this.app.use(routerErrorHandler);
  }

  get port() {
    return this.app.get('port');
  }
  get application() {
    return this.app;
  }
}
