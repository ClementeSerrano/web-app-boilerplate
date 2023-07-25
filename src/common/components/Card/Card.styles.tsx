import styled from 'styled-components';

import { CardProps } from './Card.types';

export const CardContainer = styled.article<Pick<CardProps, 'onClick'>>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.background.level1};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0),
    0 3px 5px 0px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s, background-color 0.1s;

  ${({ theme, onClick }) =>
    onClick &&
    `
      cursor: pointer;

      &:hover {
        background-color: ${theme.palette.background.level2};
      }
    `}
`;
