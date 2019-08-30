import { Schema, Document, model } from 'mongoose';
export interface IService extends Document {
  _id: string;
  name: string;
  tasks: ServiceTask[];
}

export enum ServiceTask {
  removeSpaces = 'removeSpaces',
  toLowerCase = 'toLowerCase',
  toUpperCase = 'toUpperCase',
  encrypt = 'encrypt',
  decrypt = 'decrypt',
  zip = 'zip',
  unzip = 'unzip'
}

const ServiceSchema: Schema = new Schema({
  name: {
    type: String,
    unique: true
  },
  tasks: [String]
});

export default model<IService>('Service', ServiceSchema);
