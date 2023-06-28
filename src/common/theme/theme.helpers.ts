import { ParseSizeArgs } from './theme.types';

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
  return parseSize({ value, from: 'px', to: 'px', withUnits: true });
}

/**
 * Takes a string as a parameter and calculates a unique HEX color based on
 * the sum of the ASCII codes of the initials characters.
 * @param _string - The string to process.
 * @returns - An hexadecimal color string.
 */
export function getColorFormString(_string: string): string {
  let sum = 0;
  for (let i = 0; i < _string.length; i++) {
    sum += _string.charCodeAt(i);
  }
  const color = (sum % 0xffffff).toString(16);
  return `#${'0'.repeat(6 - color.length)}${color}`;
}
