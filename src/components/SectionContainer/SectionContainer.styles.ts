import styled from 'styled-components';

import { DEVICES_BREAKPOINTS } from 'contexts/DeviceContext/DeviceContext.constants';

export const SectionSeparator = styled.div<{ $paddingVertical: number }>`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => `linear-gradient(
    to right,
    ${theme.palette.background.level1},
    ${theme.palette.background.level3} 50%,
    ${theme.palette.background.level1}
  )`};
  margin: ${({ $paddingVertical }) => $paddingVertical}px 0;

  @media (max-width: ${DEVICES_BREAKPOINTS.phone.max}px) {
    margin: 80px 0;
  }
`;
