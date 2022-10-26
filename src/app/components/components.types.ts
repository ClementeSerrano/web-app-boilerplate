export type WithChildren<T = unknown> = T & { children: React.ReactNode };

export type WithStyle<T = unknown> = T & {
  style?: React.CSSProperties;
  className?: string;
};

export type ElementPosition = "top" | "bottom" | "center";

export type ElementDirection = "up" | "down" | "left" | "right";
