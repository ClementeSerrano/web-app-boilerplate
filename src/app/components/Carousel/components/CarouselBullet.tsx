import { CarouselBulletContainer } from "../Carousel.styles";
import { CarouselBulletProps } from "../Carousel.types";

export default function CarouselBullet({
  index,
  bullet: BaseBullet,
  setSlide,
  activeIndex,
  style,
  className,
}: CarouselBulletProps) {
  function updateSlide() {
    setSlide(index);
  }

  if (BaseBullet)
    return (
      <BaseBullet
        key={index}
        isActive={index === activeIndex}
        onClick={updateSlide}
      />
    );

  return (
    <CarouselBulletContainer
      key={index}
      active={index === activeIndex}
      onClick={updateSlide}
      style={style}
      className={className}
    />
  );
}
