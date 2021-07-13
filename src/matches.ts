const key = (numbers: number[]): number => numbers.reduce((sum, n, i) => sum + n * Math.pow(10, i * 2), 0);

export const get = (numbers: number[], matches: Map<number, number>): number => matches.get(key(numbers)) ?? 0;

export const set = (numbers: number[], count: number, matches: Map<number, number>): Map<number, number> =>
  matches.set(key(numbers), count);

export const add =
  (matches: Map<number, number>) =>
  (numbers: number[]): Map<number, number> => {
    return set(numbers, get(numbers, matches) + 1, matches);
  };

export const sum = (numbersList: number[][], matches: Map<number, number>): number =>
  numbersList.reduce((sum, numbers) => sum + get(numbers, matches), 0);
