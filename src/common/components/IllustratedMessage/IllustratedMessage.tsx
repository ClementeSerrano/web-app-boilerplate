import React from 'react';
import { useTheme } from 'styled-components';
import Grid from '../Grid/Grid';
import Typography from '../Typography/Typography';

import { renderIllustration } from './IllustratedMessage.helpers';
import {
  getIllustratedMessageBodyStyles,
  getIllustratedMessageTitleStyles,
} from './IllustratedMessage.styles';
import { IllustratedMessageProps } from './IllustratedMessage.types';

export default function IllustratedMessage({
  illustration,
  illustrationOptions,
  title,
  body,
  style,
}: IllustratedMessageProps) {
  const theme = useTheme();

  return (
    <Grid direction="column" align="center" style={style?.container}>
      {illustration &&
        (React.isValidElement(illustration)
          ? illustration
          : renderIllustration(illustration as any, illustrationOptions))}

      {title &&
        (typeof title === 'string' ? (
          <Typography
            as="h1"
            variant="title5"
            style={{
              ...getIllustratedMessageTitleStyles(theme),
              ...style?.title,
            }}
          >
            {title}
          </Typography>
        ) : (
          title
        ))}

      {body &&
        (typeof body === 'string' ? (
          <Typography
            as="p"
            variant="paragraph1"
            style={{ ...getIllustratedMessageBodyStyles(), ...style?.body }}
          >
            {body}
          </Typography>
        ) : (
          body
        ))}
    </Grid>
  );
}
