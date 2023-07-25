import styled from 'styled-components';

export const SectionSeparator = styled.div<{ paddingVertical: number }>`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => `linear-gradient(
    to right,
    ${theme.palette.background.level1},
    ${theme.palette.background.level3} 50%,
    ${theme.palette.background.level1}
  )`};
  margin: ${({ paddingVertical }) => paddingVertical}px 0;
`;
