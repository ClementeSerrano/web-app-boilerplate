export type EncryptAccountArgs = {
  passphrase: string;
  name?: string;
  password: string;
  enableCustomDerivationPath?: boolean;
  derivationPath: string;
};

export type ExtractKeyPairArgs = Pick<
  EncryptAccountArgs,
  'passphrase' | 'enableCustomDerivationPath' | 'derivationPath'
>;
