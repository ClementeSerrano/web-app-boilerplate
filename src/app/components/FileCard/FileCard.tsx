import { useCallback } from 'react';
import { useTheme } from 'styled-components';

import { downloadMedia } from '../../../helpers/media.helpers';
import Button from '../Button/Button';
import Grid from '../Grid/Grid';
import Typography from '../Typography/Typography';
import FileIcon from '../../icons/FileIcon';

import { FileCardProps } from './FileCard.types';
import { FileCardContainer, FileCardIconContainer } from './FileCard.styles';

/**
 * Renders a file information in "Card" format. Allows to trigger download action over the file.
 * @param props.fileData - Data to be inserted in the downloadable file.
 * @param props.filename - Name of the file to be rendered.
 * @param props.style - Styles to add to the main container of the component.
 * @param props.className - Classname to add to the main container of the component.
 */
export default function FileCard({
  fileData,
  filename,
  style,
  className,
}: FileCardProps) {
  const theme = useTheme();

  const handleDownloadClick = useCallback(
    () => downloadMedia(fileData, filename),
    [fileData, filename],
  );

  return (
    <FileCardContainer
      container
      size="xs"
      direction="row"
      justify="space-between"
      align="center"
      style={style}
      className={className}
    >
      <Grid direction="row" align="center" as="header">
        <FileCardIconContainer container size="xxs">
          <FileIcon
            format="fill"
            color={theme.palette.primary.main}
            height={24}
          />
        </FileCardIconContainer>

        <Grid>
          <Typography as="h1" variant="paragraph1">
            {filename}
          </Typography>

          <Typography as="h2" variant="paragraph1">
            10 MB
          </Typography>
        </Grid>
      </Grid>

      <Button variant="primary" format="link" onClick={handleDownloadClick}>
        {'>'}
      </Button>
    </FileCardContainer>
  );
}
