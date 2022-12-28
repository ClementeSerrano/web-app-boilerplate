import { cryptography } from '@liskhq/lisk-client';

export type Account = {
  encryptedPassphrase: EncryptedPassphrase;
  metadata: AccountMetadata;
  version: number;
};

export type EncryptedPassphrase = {
  readonly version: string;
  readonly ciphertext: string;
  readonly mac: string;
  readonly kdf: cryptography.encrypt.KDF;
  readonly kdfparams: {
    parallelism: number;
    iterations: number;
    memorySize: number;
    salt: string;
  };
  readonly cipher: cryptography.encrypt.Cipher;
  readonly cipherparams: {
    iv: string;
    tag: string;
  };
};

export type AccountMetadata = {
  address: string;
  name?: string;
  pubkey: string;
  path: string;
  createdAt: Date;
};
