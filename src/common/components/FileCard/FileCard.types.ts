import { MediaData } from '../../../types/media.types';
import { WithStyle } from '../components.types';

export type FileCardProps = WithStyle & {
  fileData: MediaData;
  filename: string;
};
