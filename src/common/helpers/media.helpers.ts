import { DataUnit, MediaData } from '../../types/media.types';

/**
 * Triggers a browser media download given a data content and filename.
 * @param data - Data to be downloaded as file.
 * @param filename - Name to put to the downloadable file.
 */
export function downloadMedia(data: MediaData, filename: string) {
  const blob = new Blob([data]);

  const url = window.URL.createObjectURL(blob);

  const a = document.createElement('a');

  a.href = url;

  a.setAttribute('download', filename);

  document.body.appendChild(a);

  a.click();
  a.remove();
}

/**
 * Returns the size of the data in the given unit of measure
 * @param data - The Blob object to get the size of
 * @param unit - The unit of measure to use. Default is 'bytes'.
 * @returns {number} The size of the data in the given unit of measure
 * @throws {Error} Will throw an error if an invalid unit of measure is provided.
 */
export function getMediaSize(data: MediaData, unit: DataUnit): number {
  const blob = new Blob([data]);

  const sizeInBytes = blob.size;

  switch (unit) {
    case 'bytes':
      return sizeInBytes;
    case 'kb':
      return sizeInBytes / 1024;
    case 'mb':
      return sizeInBytes / 1024 ** 2;
    case 'gb':
      return sizeInBytes / 1024 ** 3;
    case 'tb':
      return sizeInBytes / 1024 ** 4;
    case 'pb':
      return sizeInBytes / 1024 ** 5;
    default:
      throw new Error('Invalid unit of measure');
  }
}

/**
 * Returns a user-friendly string with the most readable format of the file size
 * @param data - The data object to get the size of
 * @returns {string} The file size in a user-friendly format
 */
export function getReadableMediaSize(data: MediaData): string {
  const blob = new Blob([data]);

  const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

  let sizeInBytes = blob.size;

  let unitIndex = 0;

  while (sizeInBytes >= 1024 && unitIndex < units.length - 1) {
    sizeInBytes /= 1024;
    unitIndex++;
  }

  return `${sizeInBytes.toFixed(2)} ${units[unitIndex]}`;
}
