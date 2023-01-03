import Lisk from '@liskhq/lisk-client';

import {
  DEFAULT_DERIVATION_PATH,
  PUBLIC_KEY_VALIDATION_REGEX,
} from '../accounts.constants';
import { Account, PassphraseKeyPair } from '../accounts.types';

import {
  EncryptAccountArgs,
  ExtractKeyPairArgs,
} from './accounts.helpers.types';

/**
 * Creates a random mnemonic using Lisk protocol.
 * Defaults to 128-bits of entropy var mnemonic = bip39.generateMnemonic()
 * @returns A valid mnemonic passphrase.
 */
export function createPassphrase(): string {
  return Lisk.passphrase.Mnemonic.generateMnemonic();
}

/**
 * Allows to encrypt an account.
 * @param param0
 * @returns
 */
export async function encryptAccount({
  passphrase,
  password,
  name,
  derivationPath,
  enableCustomDerivationPath = false,
}: EncryptAccountArgs): Promise<Account> {
  try {
    const options = {
      passphrase,
      enableCustomDerivationPath,
      derivationPath: enableCustomDerivationPath
        ? derivationPath
        : DEFAULT_DERIVATION_PATH,
    };

    const { privateKey, publicKey, isValid } = await extractKeyPair(options);

    if (!isValid || !publicKey || !privateKey) {
      throw new Error('Failed to extract keypair for given recovery phrase.');
    }

    const address = extractAddressFromPublicKey(publicKey);

    const plainText = JSON.stringify({
      privateKey,
      recoveryPhrase: passphrase,
    });

    const encryptedPassphrase =
      await Lisk.cryptography.encrypt.encryptMessageWithPassword(
        plainText,
        password,
      );

    return {
      encryptedPassphrase,
      metadata: {
        name,
        pubkey: publicKey,
        path: derivationPath ?? DEFAULT_DERIVATION_PATH,
        address,
        createdAt: new Date().toISOString(),
      },
      version: 1,
    };
  } catch (error: any) {
    throw new Error(error);
  }
}

/**
 * Extracts Lisk PrivateKey/PublicKey pair from a given valid Mnemonic passphrase.
 * @param passphrase - Valid Mnemonic passphrase.
 * @param enableCustomDerivationPath - Enable custom derivation for HW
 * @param derivationPath - Custom derivation path for HW
 * @returns - Extracted publicKey for a given valid passphrase
 */
export async function extractKeyPair({
  passphrase,
  enableCustomDerivationPath = false,
  derivationPath,
}: ExtractKeyPairArgs): Promise<PassphraseKeyPair> {
  if (enableCustomDerivationPath) {
    const privateKey =
      await Lisk.cryptography.ed.getPrivateKeyFromPhraseAndPath(
        passphrase,
        derivationPath,
      );

    const publicKey = Lisk.cryptography.ed
      .getPublicKeyFromPrivateKey(privateKey)
      .toString('hex');

    return {
      publicKey,
      privateKey: privateKey.toString('hex'),
      isValid: true,
    };
  }

  if (Lisk.passphrase.Mnemonic.validateMnemonic(passphrase)) {
    const keyPair = Lisk.cryptography.legacy.getKeys(passphrase);

    return {
      publicKey: keyPair.publicKey.toString('hex'),
      privateKey: keyPair.privateKey.toString('hex'),
      isValid: true,
    };
  }

  return { isValid: false };
}

/**
 * Extracts address from publicKey
 * @param data - Public key in hex format.
 * @returns - Address derived from the given publicKey
 */
export function extractAddressFromPublicKey(data: string): string {
  if (PUBLIC_KEY_VALIDATION_REGEX.test(data)) {
    const binaryPublicKey = Buffer.from(data, 'hex');

    return Lisk.cryptography.address.getLisk32AddressFromPublicKey(
      binaryPublicKey,
    );
  }

  if (Buffer.isBuffer(data)) {
    return Lisk.cryptography.address.getLisk32AddressFromPublicKey(data);
  }

  throw Error(`Unable to convert publicKey ${data} to address`);
}
