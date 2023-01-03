import { cryptography } from '@liskhq/lisk-client';

export type Account = {
  encryptedPassphrase: cryptography.encrypt.EncryptedMessageObject;
  metadata: AccountMetadata;
  version: number;
};

export type AccountMetadata = {
  address: string;
  createdAt: string;
  name?: string;
  pubkey: string;
  path: string;
};

export type PassphraseKeyPair = {
  isValid: boolean;
  publicKey?: string;
  privateKey?: string;
};
