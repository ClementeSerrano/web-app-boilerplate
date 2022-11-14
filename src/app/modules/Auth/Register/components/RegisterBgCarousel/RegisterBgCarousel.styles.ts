import { CSSProperties } from "styled-components";

import { CarouselStyle } from "../../../../../components/Carousel/Carousel.types";
import { themeBreakpoints } from "../../../../../theme/breakpoints.theme";
import { themeShape } from "../../../../../theme/shape.theme";

export const registerBgImgsCarouselStyle: CarouselStyle = {
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  innerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: themeBreakpoints.values.md,
  },
};

export const registerBgImgsSlideStyle: CSSProperties = {
  width: "100%",
  borderRadius: themeShape.borderRadius.xl,
};
