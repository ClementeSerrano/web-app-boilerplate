import styled from 'styled-components';

export const SwitchContainer = styled.div`
  position: relative;
  width: 42px;
  height: 24px;
`;

export const SwitchLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 24px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.palette.background.level2};
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${({ theme }) => theme.palette.background.level3};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const SwitchInput = styled.input.attrs({ type: 'checkbox' })<{
  baseColor?: string;
}>`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;

  &:checked + ${SwitchLabel} {
    background: ${({ theme, baseColor }) =>
      baseColor || theme.palette.primary.main};

    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export const SwitchErrorParagraph = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  margin: 0;
  color: ${({ theme }) => theme.palette.error.main};
  margin-top: 15px;
`;
