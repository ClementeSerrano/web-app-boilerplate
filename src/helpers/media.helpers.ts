import { MediaData } from '../types/media.types';

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
