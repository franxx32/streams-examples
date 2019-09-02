import Service from '../../src/modules/service/service.model';
import * as request from 'supertest';
import { App } from '../../src/app';
import { StringDecoder } from 'string_decoder';

export async function createService(name: string, tasks: string[]) {
  const { application } = new App();
  const service = await request(application)
    .post('/services')
    .send({ name, tasks });
  return service.body;
}

export async function serviceConvert(name: string, text: string) {
  const { application } = new App();
  const service = await request(application)
    .post(`/services/${name}`)
    .type('text/plain')
    .responseType('buffer')
    .send(text);
  const converted = new StringDecoder('utf-8').write(service.body);
  return converted;
}

export async function cleanServices() {
  await Service.deleteMany({});
}
