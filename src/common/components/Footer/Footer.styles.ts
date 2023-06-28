import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { DEVICES_BREAKPOINTS } from '../../contexts/DeviceContext/DeviceContext.constants';

export const FooterContainer = styled.footer`
  display: flex;
  background-color: ${({ theme }) => theme.palette.background.level1};
`;

export const FooterInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md}px;
  width: 100%;
  align-items: center;
  position: relative;

  @media (max-width: ${DEVICES_BREAKPOINTS.phone.max}px) {
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.md}px;
  }
`;

export const FooterCopyrightContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${DEVICES_BREAKPOINTS.phone.max}px) {
    margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${DEVICES_BREAKPOINTS.phone.max}px) {
    flex-direction: column;
    position: unset;
    transform: unset;
  }
`;

export const FooterLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.level1};
  font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
  line-height: 1.4;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.palette.text.level3};
  }

  &:not(:last-child) {
    margin-right: 32px;
  }

  @media (max-width: ${DEVICES_BREAKPOINTS.phone.max}px) {
    text-align: center;
    margin: ${({ theme }) => theme.spacing.xxxs}px 0;

    &:not(:last-child) {
      margin-right: 0;
    }
  }
`;

export const FooterSectionsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${DEVICES_BREAKPOINTS.phone}) {
    &:not(:last-child) {
      margin-bottom: ${({ theme }) => theme.spacing.sm}px;
    }
  }
`;

export const FooterSocialMediaLink = styled.a`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.spacing.md}px;
  width: ${({ theme }) => theme.spacing.md}px;
  border-radius: 50%;
  padding: ${({ theme }) => theme.spacing.xxs}px;
  color: ${({ theme }) => theme.palette.text.level1};
  transition: 0.5s color, 0.5s background-color;

  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing.sm}px;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.background.level1};
    background-color: ${({ theme }) => theme.palette.background.level5};
  }
`;
