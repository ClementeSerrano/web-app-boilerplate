import { CarouselSlideProps } from "../Carousel.types";
import { CarouselSlideContainer } from "../Carousel.styles";

export default function CarouselSlide({
  children,
  ...props
}: CarouselSlideProps) {
  return <CarouselSlideContainer {...props}>{children}</CarouselSlideContainer>;
}
