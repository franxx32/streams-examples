import Service from './service.model';
import * as stream from 'stream';
import * as util from 'util';
import { Request, Response } from 'express';
import { IRequestWithService } from '../../interfaces/httpInterfaces';
import { StreamFactory } from '../../streams/streamFactory';

export class ServiceController {
  public async create(req: Request, res: Response) {
    const { name, tasks } = req.body;
    const service = new Service({ name, tasks });
    const savedService = await service.save();
    res.json(savedService);
  }

  public async convert(req: IRequestWithService, res: Response) {
    const { service } = req;
    const pipeline = util.promisify(stream.pipeline);
    const streamFactory = new StreamFactory();
    // req.on('data', data => {
    //   console.log(data);
    //   console.log('-----------------');
    // });
    const transformStreams = streamFactory.getStreamsChain(service.tasks);
    const streams = [req, ...transformStreams, res];
    await pipeline.call(this, streams);
    res.status(200);
  }
}
