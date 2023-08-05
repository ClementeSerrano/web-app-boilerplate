import styled from 'styled-components';
import Button from '../Button/Button';

export const InformativePillContainer = styled(Button)`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.shape.borderRadius.md}px;
  background: ${({ theme }) => theme.palette.background.level2};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.background.level3};
  font-size: 13px;
`;
