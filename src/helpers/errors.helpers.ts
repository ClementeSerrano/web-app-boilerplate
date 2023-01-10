import { ErrorWithMessage } from '../types/error.types';

/**
 * Allows to map any unknown Error to a defined Error object.
 * @param error - Error instance thrown by a try-catch statement.
 */
export function getErrorWithMessage(error: unknown): ErrorWithMessage {
  if (isErrorWithMessage(error)) return error;

  try {
    return new Error(JSON.stringify(error));
  } catch {
    return new Error(String(error));
  }
}

/**
 * Determinate if an Error object has a defined {message: string} field on it.
 * @param error - Error object to analyze.
 * @returns True if the provided error has a message field, false if not.
 */
function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}
