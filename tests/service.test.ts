import test from 'ava';
import { createService, serviceConvert } from './helpers/service';
import { beforeAll, afterAll, clearAllTables } from './helpers/hooks';

test.before(async t => {
  await beforeAll();
});

test.after(async t => {
  await afterAll();
});

test.beforeEach(async t => {
  await clearAllTables();
});

test('Success service creation', async t => {
  const service = await createService('XzX32', [
    'toLowerCase',
    'removeSpaces',
    'zip',
    'encrypt',
    'decrypt',
    'unzip',
    'toUpperCase'
  ]);

  t.truthy(service._id);
  t.is(service.name, 'XzX32');
  t.deepEqual(service.tasks, [
    'toLowerCase',
    'removeSpaces',
    'zip',
    'encrypt',
    'decrypt',
    'unzip',
    'toUpperCase'
  ]);
});

test('Failed service creation with existed name', async t => {
  await createService('Franxx32', ['toLowerCase']);
  const service = await createService('Franxx32', ['toLowerCase']);
  t.is(service.errors, 'This service is already exist');
});

test('Failed service creation with empty array', async t => {
  const service = await createService('FranXX', []);
  t.truthy(service.errors);
});

test('Success service convert', async t => {
  const service = await createService('XX32', [
    'toLowerCase',
    'removeSpaces',
    'zip',
    'encrypt',
    'decrypt',
    'unzip',
    'toUpperCase'
  ]);
  const convertedText = await serviceConvert(
    service.name,
    'AkaMe Ga k0Ill.Lol'
  );
  t.is(convertedText, 'AKAMEGAK0ILL.LOL');
  t.pass();
});
