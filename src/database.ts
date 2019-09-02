import * as mongoose from 'mongoose';
import { logError, logMessage } from './utils';
export class Database {
  public connect() {
    return new Promise((res, rej) => {
      mongoose.connect(process.env.MONGO_DB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true
      });
      const db = mongoose.connection;

      db.on('error', error => {
        logError(error);
        rej(error);
      });

      db.once('open', () => {
        const message = 'Connected to MongoDB!';
        logMessage(message);
        res(message);
      });
    });
  }

  public async disconnect() {
    await mongoose.connection.close();
  }
}
