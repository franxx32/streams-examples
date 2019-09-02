import { cleanServices } from './service';
import { Database } from '../../src/database';
import { resolve } from 'path';
import { config } from 'dotenv';

export async function clearAllTables() {
  await cleanServices();
}

export async function beforeAll() {
  config({ path: resolve(__dirname, '../../.env.test') });

  await new Database().connect();
}

export async function afterAll() {
  await new Database().disconnect();
}
