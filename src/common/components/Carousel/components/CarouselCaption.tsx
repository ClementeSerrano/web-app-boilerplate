import { CarouselCaptionContainer } from "../Carousel.styles";
import { CarouselCaptionProps } from "../Carousel.types";

export default function CarouselCaption({
  children,
  position = "center",
  style,
  className,
}: CarouselCaptionProps) {
  return (
    <CarouselCaptionContainer
      position={position}
      className={className}
      style={style}
    >
      {children}
    </CarouselCaptionContainer>
  );
}
