import { passphrase } from '@liskhq/lisk-client';

/**
 * Creates a random mnemonic using Lisk protocol.
 * Defaults to 128-bits of entropy var mnemonic = bip39.generateMnemonic()
 * @returns {string} A valid mnemonic passphrase.
 */
export function createPassphrase(): string {
  return passphrase.Mnemonic.generateMnemonic();
}
