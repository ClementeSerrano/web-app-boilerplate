import { CSSProperties } from "styled-components";
import { CarouselStyle } from "../../../../components/Carousel/Carousel.types";
import { themeShape } from "../../../../theme/shape.theme";

export const registerBgImgsCarouselStyle: CarouselStyle = {
  container: {
    width: "50vw",
  },
  innerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export const registerBgImgsSlideStyle: CSSProperties = {
  width: "100%",
  borderRadius: themeShape.borderRadius.xl,
};