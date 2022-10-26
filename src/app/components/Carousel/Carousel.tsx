import React, { useRef, useState, useEffect, useMemo } from "react";
import { useGesture } from "@use-gesture/react";
import { animated, useSprings } from "@react-spring/web";

import CarouselArrow from "./components/CarouselArrow";
import CarouselBullet from "./components/CarouselBullet";
import CarouselSlide from "./components/CarouselSlide";
import CarouselCaption from "./components/CarouselCaption";

import { CarouselComponent, CarouselProps } from "./Carousel.types";
import {
  CarouselContainer,
  CarouselInnerContainer,
  CarouselArrowsContainer,
  CarouselBulletsContainer,
  CarouselBulletList,
} from "./Carousel.styles";

export default function Carousel({
  activeIndex = 0,
  arrow,
  autoplay = 0,
  bullet,
  children,
  withArrows = false,
  withBullets = false,
  onSlideChange = () => undefined,
  setSlideCustom = undefined,
  slidesAtOnce = 1,
  style,
}: CarouselProps): CarouselComponent {
  const slides = React.Children.map(children, (child) => {
    if (child.type !== CarouselSlide) return;

    return child;
  });

  const sliderRef = useRef<HTMLDivElement>(null);

  const [slide, setSlideOriginal] = useState(0);

  const [isDragging, setIsDragging] = useState(false);

  const setSlide = useMemo(
    () =>
      setSlideCustom
        ? (index: number) => setSlideOriginal(setSlideCustom(index))
        : setSlideOriginal,
    [setSlideCustom]
  );

  const [springs, setSprings] = useSprings(slides.length, (index) => ({
    offset: index,
  }));

  const gesture = useGesture(
    {
      onDrag: ({
        down,
        movement: [xDelta],
        direction: [xDirection],
        distance: [xDistance],
        cancel,
        first,
        active,
      }) => {
        if (first) setIsDragging(true);

        if (sliderRef && sliderRef.current && sliderRef.current.parentElement) {
          const { width } =
            sliderRef.current.parentElement.getBoundingClientRect();

          if (down && xDistance > width / 2) {
            cancel && cancel();

            if (active)
              setSlide(
                Math.min(
                  Math.max(slide + (xDirection > 0 ? -1 : 1), 0),
                  slides.length - slidesAtOnce
                )
              );
          }

          setSprings.start((index) => ({
            offset: (active && down ? xDelta : 0) / width + (index - slide),
          }));
        }
      },
      onClick: () => {
        if (isDragging) return setIsDragging(false);

        handleSlideClick(slide);
      },
    },
    {
      drag: {
        delay: 200,
      },
    }
  );

  useEffect(() => {
    setSprings.start((index) => ({ offset: index - slide }));

    onSlideChange(slide);
  }, [slide, setSprings, onSlideChange]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay > 0) {
      interval = global.setInterval(() => {
        const targetIndex = (slide + 1) % slides.length;

        setSlide(targetIndex);
      }, autoplay);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, slides.length, slide, setSlide]);

  useEffect(() => {
    setSlide(activeIndex % slides.length);
  }, [activeIndex, slides.length, setSlide]);

  function handleSlideClick(slideIndex: number) {
    slides[slideIndex].props.onClick && slides[slideIndex].props.onClick();
  }

  function goToNextSlide() {
    if (slide === slides.length - slidesAtOnce) return setSlide(0);

    setSlide(slide + 1);
  }

  function goToPrevSlide() {
    if (slide === 0) return setSlide(slides.length - slidesAtOnce);

    setSlide(slide - 1);
  }

  function renderBullets() {
    const arr = [];

    for (let index = 0; index <= slides.length - slidesAtOnce; index++) {
      arr.push(
        <CarouselBullet
          key={index}
          index={index}
          bullet={bullet}
          setSlide={setSlide}
          activeIndex={slide}
          style={style && style.bullet}
        />
      );
    }

    return arr;
  }

  const isMultiSlide = slides.length > 1;

  return (
    <CarouselContainer ref={sliderRef} style={style?.container}>
      <CarouselInnerContainer style={style?.innerContainer}>
        {isMultiSlide && withArrows && (
          <CarouselArrowsContainer>
            <CarouselArrow
              arrow={arrow}
              style={style?.arrow}
              direction="left"
              onClick={goToPrevSlide}
            />

            <CarouselArrow
              arrow={arrow}
              style={style?.arrow}
              direction="right"
              onClick={goToNextSlide}
            />
          </CarouselArrowsContainer>
        )}

        {isMultiSlide && withBullets && (
          <CarouselBulletsContainer>
            <CarouselBulletList>{renderBullets()}</CarouselBulletList>
          </CarouselBulletsContainer>
        )}

        {springs.map((spring, index) => (
          <animated.div
            {...gesture()}
            key={index}
            style={{
              transform: spring.offset.to(
                (offsetX) => `translate3d(${offsetX * 100}%, 0, 0)`
              ),
              position: "absolute",
              width: `${100 / slidesAtOnce}%`,
              willChange: "transform",
              ...style?.spring,
            }}
          >
            {slides[index]}
          </animated.div>
        ))}
      </CarouselInnerContainer>
    </CarouselContainer>
  ) as CarouselComponent;
}

Carousel.Slide = CarouselSlide;
Carousel.Caption = CarouselCaption;
