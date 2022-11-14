import { passphrase } from "@liskhq/lisk-client";

/**
 * Generate a random mnemonic (uses crypto.randomBytes under the hood),
 * defaults to 128-bits of entropy var mnemonic = bip39.generateMnemonic()
 * @returns {string} A valid mnemoic passphrase
 */
export function generatePassphrase(): string {
  return passphrase.Mnemonic.generateMnemonic();
}
