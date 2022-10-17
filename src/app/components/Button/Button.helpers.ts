import { ButtonProps } from "./Button.types";

export function getButtonPadding({
  format,
  size,
}: Pick<ButtonProps, "format" | "size">): string {
  return format === "link" ? "0px" : size === "sm" ? "4px 16px" : "12px 16px";
}
