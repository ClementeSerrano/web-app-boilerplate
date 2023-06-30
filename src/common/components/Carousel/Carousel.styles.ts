import styled from 'styled-components';
import { ElementPosition } from '../../interfaces/components.interfaces';
import { CarouselArrowDirection } from './Carousel.types';

/**
 * Main style definitions.
 */
export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const CarouselInnerContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const CarouselArrowsContainer = styled.div`
  top: 50%;
  position: absolute;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
`;

export const CarouselBulletsContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1;
`;

export const CarouselBulletList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 15px 0;
`;

/**
 * Components style definitions.
 */
export const CarouselSlideContainer = styled.div`
  width: 100%;
  height: 100%;
  will-change: transform;
  user-select: none;
  position: relative;
`;

export const CarouselCaptionContainer = styled.aside<{
  position: ElementPosition;
}>`
  position: absolute;

  ${({ position }) => {
    let top = 50;

    switch (position) {
      case 'center':
        break;
      case 'top':
        top = 25;
        break;
      case 'bottom':
        top = 75;
        break;
    }

    return `
      top: ${top}%;
      left: 50%;
      transform: translate(-50%, -50%);
    `;
  }}
`;

export const CarouselBulletContainer = styled.li<{ active: boolean }>`
  cursor: pointer;
  height: 8px;
  width: 8px;
  background-color: ${({ theme }) => theme.colors.gray.darker};
  border-radius: 50%;
  display: inline-block;
  margin: 0 2px;
  transition: 0.3s opacity;
  opacity: ${({ active }) => (active ? '0.4' : '1')};
`;

export const CarouselArrowIcon = styled.i<{
  direction: CarouselArrowDirection;
}>`
  border: solid ${({ theme }) => theme.colors.white.main};
  border-width: 0 2px 2px 0;
  display: inline-block;
  height: 8px;
  width: 8px;
  cursor: pointer;
  transition: 0.3s opacity;
  transform: ${({ direction }) =>
    direction === 'left' ? 'rotate(135deg)' : 'rotate(-45deg)'};
  &:hover {
    opacity: 0.4;
  }
`;

export const CarouselArrowContainer = styled.a<{
  direction: CarouselArrowDirection;
}>`
  padding: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.black.light};
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ direction }) =>
    direction === 'left' ? 'margin-left: 0.4em;' : 'margin-right: 0.4em;'}
`;
