import { ParseSizeArgs } from "./theme.types";

export function parseSize({
  value,
  from,
  to,
  withUnits = false,
}: ParseSizeArgs) {
  if (from === to) return withUnits ? `${value}${to}` : value;

  const conversionFactors = {
    px: { px: 1, rem: 1 / 16, em: 1 / 16 },
    rem: { px: 16, rem: 1, em: 1 },
    em: { px: 16, rem: 1, em: 1 },
  };

  const parsedValue = value * conversionFactors[from][to];

  return withUnits ? `${parsedValue}${to}` : parsedValue;
}

export function parseVectorHeight(value: number) {
  return parseSize({ value, from: "px", to: "px", withUnits: true });
}
