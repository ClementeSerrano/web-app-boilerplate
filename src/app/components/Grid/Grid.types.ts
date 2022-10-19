import { ValueOf } from "../../../types/general";
import { ThemePalette, ThemeSizeUnit } from "../../theme/theme.types";

export type GridProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  container?: boolean;
  format?: keyof ValueOf<Pick<ThemePalette, "background">>;
  size?: Extract<ThemeSizeUnit, "sm" | "md" | "lg">;
  style?: React.CSSProperties;
  className?: string;
  as?: "div" | "section" | "aside";
};
