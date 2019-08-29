import { Transform } from 'stream';
import { decodeChunk } from './streamUtils';
export class ToLowerCaseStream extends Transform {
  constructor(options) {
    super(options);
  }

  public _transform(chunk, encoding, callback) {
    chunk = decodeChunk(chunk, encoding);
    chunk = chunk.toLowerCase();
    callback(null, chunk);
  }
}
