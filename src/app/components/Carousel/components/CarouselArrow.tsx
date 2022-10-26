import { CarouselArrowContainer, CarouselArrowIcon } from "../Carousel.styles";
import { CarouselArrowProps } from "../Carousel.types";

export default function CarouselArrow({
  onClick,
  direction,
  arrow: BaseArrow,
  style,
  className,
}: CarouselArrowProps) {
  if (BaseArrow) return <BaseArrow direction={direction} onClick={onClick} />;

  return (
    <CarouselArrowContainer onClick={onClick} direction={direction}>
      <CarouselArrowIcon
        className={className}
        style={style}
        direction={direction}
      />
    </CarouselArrowContainer>
  );
}
