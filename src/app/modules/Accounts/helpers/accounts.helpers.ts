import * as Lisk from '@liskhq/lisk-client';

import { getErrorWithMessage } from '../../../../helpers/errors.helpers';

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
 * Creates an encrypted account given a passphrase, password, name and
 * derivationPath.
 * @param args.passphrase - Passphrase from where to create the encrypted account.
 * @param args.password - Password from where to create the encrypted account.
 * @param args.name - Username to provide to the encrypted account (optional)
 * @param args.derivationPath - Derivation path to encrypt from (optional).
 * If its not provided, the default one will be assigned.
 * @param args.enableCustomDerivationPath - Flag that indicates if derivationPath arg
 * should be or not used (optional). Default value is false.
 * @returns An encrypted user account.
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
  } catch (error) {
    throw getErrorWithMessage(error);
  }
}

/**
 * Extracts Lisk private/public keys pair from a given Mnemonic passphrase.
 * @param args.passphrase - Valid Mnemonic passphrase.
 * @param args.enableCustomDerivationPath - Flag that indicates if derivationPath
 * arg should be or not used (optional). Default value is false.
 * @param args.derivationPath - Derivation path to encrypt from (optional).
 * If its not provided, the default one will be assigned.
 * @returns - Extracted public key from passphrase.
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
 * Extracts an address from a given public key.
 * @param data - Public key in hex format.
 * @returns - Address extracted from the given public key.
 */
export function extractAddressFromPublicKey(data: string): string {
  if (PUBLIC_KEY_VALIDATION_REGEX.test(data)) {
    const binaryPublicKey = Buffer.from(data, 'hex');

    return Lisk.cryptography.address.getLisk32AddressFromPublicKey(
      binaryPublicKey,
    );
  }

  throw Error(`Unable to convert publicKey ${data} to address`);
}
