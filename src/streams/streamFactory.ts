import { createTextEditorStream } from './textEditor.stream';
import { createCipheriv, createDecipheriv } from 'crypto';
import { createGzip, createGunzip } from 'zlib';

import { cryptoConfig } from '../configs';

const streams = {
  toLowerCase: {
    stream: createTextEditorStream,
    args: ['toLowerCase']
  },
  toUpperCase: {
    stream: createTextEditorStream,
    args: ['toUpperCase']
  },
  removeSpaces: {
    stream: createTextEditorStream,
    args: ['removeSpaces']
  },
  encrypt: {
    stream: createCipheriv,
    args: [cryptoConfig.algorithm, cryptoConfig.key, cryptoConfig.iv]
  },
  decrypt: {
    stream: createDecipheriv,
    args: [cryptoConfig.algorithm, cryptoConfig.key, cryptoConfig.iv]
  },
  zip: {
    stream: createGzip,
    args: []
  },
  unzip: {
    stream: createGunzip,
    args: []
  }
};

export class StreamFactory {
  public getStream(name: string) {
    const streamObj = streams[name];
    const streamFunc = streamObj.stream;
    const stream = streamFunc.call(this, ...streamObj.args);
    return stream;
  }

  public getStreamsChain(names: string[]) {
    const streamsChain = names.map(streamName => this.getStream(streamName));
    return streamsChain;
  }
}
