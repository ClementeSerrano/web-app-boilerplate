import styled from 'styled-components';

export const AvatarFallback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  border-radius: 50%;
  padding: 4px;
  color: ${({ theme }) => theme.colors.white.main};
`;

export const AvatarImg = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;
