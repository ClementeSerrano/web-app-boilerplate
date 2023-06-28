import { CSSProperties, ReactNode } from "react";

export type FallbackScreenProps = Pick<CSSProperties, "color"> & {
  type: "loading" | "error";
  title?: string | ReactNode;
  description?: string | ReactNode;
};
