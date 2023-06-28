import styled from 'styled-components';
import { AvatarProps } from './Avatar.types';

export const AvatarFallback = styled.aside<Required<Pick<AvatarProps, 'size'>>>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  border-radius: 50%;
  padding: ${({ theme }) => theme.spacing.xxs}px;
  color: ${({ theme }) => theme.colors.white.main};
  height: ${({ theme, size }) => theme.spacing[size]}px;
  width: ${({ theme, size }) => theme.spacing[size]}px;
  border: ${({ theme }) => `1px solid ${theme.palette.background.level3}`};
`;

export const AvatarImg = styled.img<Required<Pick<AvatarProps, 'size'>>>`
  border-radius: 50%;
  object-fit: cover;
  height: ${({ theme, size }) => theme.spacing[size]}px;
  width: ${({ theme, size }) => theme.spacing[size]}px;
  border: ${({ theme }) => `1px solid ${theme.palette.background.level3}`};
`;
