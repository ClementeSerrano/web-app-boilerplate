import {
  pickRandomlyFromArray,
  shuffleArray,
} from '../../../../helpers/array.helpers';
import { createPassphrase } from '../helpers/auth.helpers';

/**
 * Generates an array of options to use in the passphrase quiz.
 * @param answer - Correct answer of the quiz to include into the
 * generated options.
 * @returns - Array formed by the correct answer, in combination with 2 other
 * random options not included in the original passphrase.
 */
export function createPassphraseQuizOptions(answer: string): string[] {
  const newPassphraseWords = createPassphrase().split(' ');

  const extraOptions = pickRandomlyFromArray(newPassphraseWords, 2);

  return shuffleArray([answer, ...extraOptions]);
}
