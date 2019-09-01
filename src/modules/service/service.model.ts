import { Schema, Document, model, startSession, Model } from 'mongoose';

export enum ServiceTask {
  removeSpaces = 'removeSpaces',
  toLowerCase = 'toLowerCase',
  toUpperCase = 'toUpperCase',
  encrypt = 'encrypt',
  decrypt = 'decrypt',
  zip = 'zip',
  unzip = 'unzip'
}
export interface IService extends Document {
  _id: string;
  name: string;
  tasks: ServiceTask[];
  timesUsed: number;
}

export interface IServiceModel extends Model<IService> {
  increaseTimesUsed(id: string): Promise<IService>;
}

const ServiceSchema: Schema = new Schema({
  name: {
    type: String,
    unique: true
  },
  tasks: [String],
  timesUsed: {
    type: Number,
    default: 0
  }
});

ServiceSchema.statics.increaseTimesUsed = async function(id: string) {
  const session = await startSession();
  session.startTransaction();
  const updatedModel = await this.updateOne(
    { _id: id },
    { $inc: { timesUsed: 1 } }
  );
  await session.commitTransaction();
  session.endSession();
  return updatedModel;
};

export default model<IService, IServiceModel>('Service', ServiceSchema);
