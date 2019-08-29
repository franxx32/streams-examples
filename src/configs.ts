import { scryptSync } from 'crypto';

export const cryptoConfig = {
  algorithm: 'aes-192-cbc',
  key: scryptSync('TOp secret', 'salt', 24),
  iv: Buffer.alloc(16, 0)
};
