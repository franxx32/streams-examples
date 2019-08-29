import { StringDecoder } from 'string_decoder';
const utfDecoder = new StringDecoder('utf-8');

export const decodeChunk = (chunk, encoding) => {
  if (encoding === 'buffer') {
    chunk = utfDecoder.write(chunk);
  }
  return chunk;
};
