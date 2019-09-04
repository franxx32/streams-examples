import test from 'ava';
import { StreamFactory } from './streamFactory';
import { Stream } from 'stream';

const streamsNames = [
  'toLowerCase',
  'removeSpaces',
  'zip',
  'encrypt',
  'decrypt',
  'unzip',
  'toUpperCase'
];

test('Stream factory get stream', t => {
  const streamFactory = new StreamFactory();
  streamsNames.forEach(name => {
    const stream = streamFactory.getStream(name);
    t.truthy(stream instanceof Stream);
    t.truthy(typeof stream._transform === 'function');
  });
});

test('Stream factory get streams', t => {
  const streamFactory = new StreamFactory();
  const streams = streamFactory.getStreamsChain(streamsNames);
  streams.forEach(stream => {
    t.truthy(stream instanceof Stream);
    t.truthy(typeof stream._transform === 'function');
  });
});
