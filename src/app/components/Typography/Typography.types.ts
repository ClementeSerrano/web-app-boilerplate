import { WithChildren, WithStyle } from "../components.types";
import { ThemeTypographyKey } from "../../theme/theme.types";

export type TypographyProps = WithChildren &
  WithStyle & {
    as: React.ElementType;
    variant?: ThemeTypographyKey;
  };
