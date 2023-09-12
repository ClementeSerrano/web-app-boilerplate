import styled from 'styled-components';

export const SwitchContainer = styled.div`
  position: relative;
  width: ${({ theme }) => theme.spacing.lg}px;
  height: ${({ theme }) => theme.spacing.md}px;
`;

export const SwitchLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.spacing.lg}px;
  height: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.shape.borderRadius.md}px;
  border: 1px solid ${({ theme }) => theme.palette.background.level2};
  cursor: pointer;
  background: ${({ theme }) => theme.palette.background.level3};

  &::after {
    content: '';
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${({ theme }) => theme.colors.white.main};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const SwitchInput = styled.input.attrs({ type: 'checkbox' })<{
  baseColor?: string;
}>`
  opacity: 0;
  z-index: 1;
  border-radius: ${({ theme }) => theme.shape.borderRadius.md}px;

  &:checked + ${SwitchLabel} {
    background: ${({ theme, baseColor }) =>
      baseColor || theme.palette.primary.main};

    &::after {
      content: '';
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 26px;
      transition: 0.2s;
    }
  }
`;

export const SwitchErrorParagraph = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  margin: 0;
  color: ${({ theme }) => theme.palette.error.main};
  margin-top: ${({ theme }) => theme.spacing.md}px;
`;
