import { passphrase } from "@liskhq/lisk-client";

/**
 * Generate a random mnemonic using Lisk protocol.
 * Defaults to 128-bits of entropy var mnemonic = bip39.generateMnemonic()
 * @returns {string} A valid mnemonic passphrase.
 */
export function generatePassphrase(): string {
  return passphrase.Mnemonic.generateMnemonic();
}
