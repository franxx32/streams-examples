import * as mongoose from 'mongoose';
import { mongoConfig } from '../dbconfig';
export class Database {
  public connect() {
    return new Promise((res, rej) => {
      mongoose.connect(mongoConfig.getLink(), { useNewUrlParser: true });
      const db = mongoose.connection;

      db.on('error', error => {
        rej(error);
      });

      db.once('open', () => {
        res('Connected to MongoDB!');
      });
    });
  }
}
