/**
 * Creates a random subset of an array.
 * @param arr - Array to pick from.
 * @param qty - Number of elements to pick.
 */
export function pickRandomlyFromArray<T = unknown>(arr: T[], qty: number): T[] {
  let options = [...arr];

  let selection: T[] = [];

  for (let i = 0; i < qty; i++) {
    const index = Math.floor(Math.random() * options.length);

    const option = options.splice(index, 1)[0];

    selection.push(option);
  }

  const sortedSelection = arr.filter(element => selection.includes(element));

  return sortedSelection;
}

/**
 * Changes randomly the place of elements in a given array.
 * @param arr - Array to shuffle.
 * @returns - The array suffled.
 */
export function shuffleArray<T = unknown>(arr: T[]) {
  const suffledArr = arr.slice();
  for (let i = suffledArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [suffledArr[i], suffledArr[rand]] = [suffledArr[rand], suffledArr[i]];
  }

  return suffledArr;
}
