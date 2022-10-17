import { ParseSizeArgs } from "./theme.types";

export function parseSize({
  value,
  from,
  to,
  withUnits = false,
}: ParseSizeArgs) {
  if (from === to) return value;

  const conversionTable = {
    px: { px: 1, rem: 1 / 16, em: 1 / 16 },
    rem: { px: 16, rem: 1, em: 1 },
    em: { px: 16, rem: 1, em: 1 },
  };

  const parsedValue = value * conversionTable[from][to];

  return withUnits ? `${parsedValue}${to}` : parsedValue;
}
