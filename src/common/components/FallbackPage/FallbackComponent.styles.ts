import styled from 'styled-components';
import Typography from '../Typography/Typography';

export const FallbackComponentContainer = styled.section`
  // background-color: ${({ theme }) => theme.palette.background.level1};
`;

export const FallbackComponentInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FallbackComponentTitle = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  text-align: center;
`;

export const FallbackComponentParagraph = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing.xs}px;
  text-align: center;
`;
