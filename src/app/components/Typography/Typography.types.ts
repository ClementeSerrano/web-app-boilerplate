import { WithChildren, WithStyle } from "../../../types/app";
import { ThemeTypographyKey } from "../../theme/theme.types";

export type TypographyProps = WithChildren &
  WithStyle & {
    as: React.ElementType;
    variant?: ThemeTypographyKey;
  };
