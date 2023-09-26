import styled from 'styled-components';

import Typography from 'components/Typography/Typography';
import { DEVICES_BREAKPOINTS } from 'contexts/DeviceContext/DeviceContext.constants';

export const ProjectDescriptionTitle = styled(Typography)`
  max-width: 560px;
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  line-height: 1.3;

  @media (max-width: ${DEVICES_BREAKPOINTS.phone.max}px) {
    font-size: 1.6rem;
  }
`;
