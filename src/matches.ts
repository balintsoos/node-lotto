const key = (numbers: number[]): string => numbers.toString();

export const get = (numbers: number[], matches: Map<string, number>): number => matches.get(key(numbers)) ?? 0;

export const set = (numbers: number[], count: number, matches: Map<string, number>): Map<string, number> =>
  matches.set(key(numbers), count);

export const add =
  (matches: Map<string, number>) =>
  (numbers: number[]): Map<string, number> => {
    return set(numbers, get(numbers, matches) + 1, matches);
  };

export const sum = (numbersList: number[][], matches: Map<string, number>): number =>
  numbersList.reduce((sum, numbers) => sum + get(numbers, matches), 0);
