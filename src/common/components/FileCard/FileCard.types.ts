import { MediaData } from '../../interfaces/media.interfaces';
import { WithStyle } from '../../interfaces/components.interfaces';

export type FileCardProps = WithStyle & {
  fileData: MediaData;
  filename: string;
};
