import { createCipher } from 'crypto';

const c = createCipher('aes-192-gcm', 'a password');
