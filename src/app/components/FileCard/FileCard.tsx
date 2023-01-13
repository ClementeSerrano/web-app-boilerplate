import { useCallback } from 'react';
import { downloadMedia } from '../../../helpers/media.helpers';
import Button from '../Button/Button';

import { FileCardProps } from './FileCard.types';
import { FileCardContainer } from './FileCard.styles';

export default function FileCard({
  fileData,
  filename,
  style,
  className,
}: FileCardProps) {
  const handleDownloadClick = useCallback(
    () => downloadMedia(fileData, filename),
    [fileData, filename],
  );

  return (
    <FileCardContainer
      container
      size="sm"
      direction="row"
      justify="space-between"
      align="center"
      style={style}
      className={className}
    >
      {filename}

      <Button variant="primary" format="link" onClick={handleDownloadClick}>
        {'>'}
      </Button>
    </FileCardContainer>
  );
}
