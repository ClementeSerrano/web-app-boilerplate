import * as Lisk from '@liskhq/lisk-client';

import { ValueOf } from '../../../../types/general.types';
import { Account, AccountMetadata } from '../accounts.types';

export const MOCKED_PASSPHRASE =
  'index provide fish bracket blame dismiss one bright squeeze disorder spring black';

export const MOCKED_ACCOUNT_NAME = 'Clemente';

export const MOCKED_ACCOUNT_PASSWORD = 'Password1!';

export const MOCKED_ACCOUNT_METADATA: AccountMetadata = {
  name: MOCKED_ACCOUNT_NAME,
  pubkey: '83caaa13165d915be0f6ad56580c90a93d334210e45a2cd0b67eb9c784ce727b',
  path: "m/44'/134'/0'",
  address: 'lsknasrp6zqfkkyo3kqqeu2d8jexadsvxntxabdzd',
  createdAt: '2023-01-10T20:27:58.513Z',
};

export const MOCKED_ENCRYPTED_PASSPHRASE: ValueOf<
  Pick<Account, 'encryptedPassphrase'>
> = {
  ciphertext:
    '86135c5fc8f39fdc766ab244d1e09619c48374d392a25cfb12389462879299f708719c8a81ac13155b85539ce69e531f82007b2a1fb3d77744c9856ca55fe7e1c7f21e5a75669c003655a2284f7eb7a34aa7a741cf6f34d6c06d0477f9f142092e38d206d8ac7220fd8d006bd897a58b8fac17aa041f6ea7beee865b419c6e92e76d904881cd246e0a1d8dd412e105c8440c0ccd4249614cf70b62ee73c0a272aecd20f23dcc74cb12f1bfa3cbd1a94b23720e9bf3242625703573fb880af6769cf6b73631b7c906e16f8e81cdfda35ddee33a2619f543cfadda12b5d4fa180884995a26e48a84103148d325aeb9436b0ceaa2cbac73',
  mac: '01755a4932cf59b7c568c275a8aa3e3072a65c81f412cf5bd2ae835b607df0ed',
  kdf: Lisk.cryptography.encrypt.KDF.ARGON2,
  kdfparams: {
    parallelism: 4,
    iterations: 1,
    memorySize: 2024,
    salt: '73409ce430469b5f8fd58dabfb9f23e1',
  },
  cipher: Lisk.cryptography.encrypt.Cipher.AES256GCM,
  cipherparams: {
    iv: '8d7163fca0b430cf82e5aea2',
    tag: 'b90c55fa8ec0f417831de4d285a307d6',
  },
  version: '1',
};

export const MOCKED_ACCOUNT: Account = {
  encryptedPassphrase: MOCKED_ENCRYPTED_PASSPHRASE,
  metadata: MOCKED_ACCOUNT_METADATA,
  version: 1,
};
