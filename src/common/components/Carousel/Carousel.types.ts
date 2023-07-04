import { CSSProperties, ReactNode } from 'react';

import {
  ElementDirection,
  ElementPosition,
  WithChildren,
  WithStyle,
} from '../../interfaces/components.interfaces';

import CarouselSlide from './components/CarouselSlide';
import CarouselCaption from './components/CarouselCaption';

/**
 * Main type definitions.
 */
export type CarouselComponent = JSX.Element & {
  Slide: typeof CarouselSlide;
  Caption: typeof CarouselCaption;
};

export type CarouselProps = {
  activeIndex?: number;
  arrow?: CarouselArrowComponent;
  autoplay?: number;
  bullet?: CarouselBulletComponent;
  children: JSX.Element[];
  withArrows?: boolean;
  withBullets?: boolean;
  onSlideChange?: (_: number) => void;
  setSlideCustom?: (_: number) => number;
  slidesAtOnce?: number;
  style?: CarouselStyle;
};

export type CarouselStyle = {
  container?: CSSProperties;
  innerContainer?: CSSProperties;
  arrow?: CSSProperties;
  bullet?: CSSProperties;
  spring?: CSSProperties;
};

/**
 * Components type definitions.
 */
export type CarouselSlideProps = WithChildren &
  WithStyle & {
    as?: React.ElementType;
  };

export type CarouselCaptionProps = {
  children: ReactNode;
  position?: ElementPosition;
  style?: CSSProperties;
  className?: string;
};

export type CarouselBulletProps = {
  bullet?: CarouselBulletComponent;
  style?: CSSProperties;
  className?: string;
  index: number;
  setSlide: (index: number) => void;
  activeIndex: number;
};

export type CarouselBulletComponentProps = {
  isActive: boolean;
  onClick: () => void;
};

export type CarouselBulletComponent = (
  props: CarouselBulletComponentProps,
) => React.ReactElement;

export type CarouselArrowProps = WithStyle & {
  onClick: () => void;
  direction: CarouselArrowDirection;
  arrow?: CarouselArrowComponent;
};

export type CarouselArrowComponent = (
  props: Pick<CarouselArrowProps, 'onClick' | 'direction'>,
) => React.ReactElement;

export type CarouselArrowDirection = Extract<
  ElementDirection,
  'left' | 'right'
>;
