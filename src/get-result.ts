import { combinations } from './combinations';
import { get, sum } from './matches';

export const getResult = (numbers: number[], matches: Map<string, number>): string => {
  const matchesOf5 = get(numbers, matches);
  const matchesOf4 = sum(combinations(numbers, 4), matches) - matchesOf5 * 5;
  const matchesOf3 = sum(combinations(numbers, 3), matches) - matchesOf5 * 10 - matchesOf4 * 4;
  const matchesOf2 = sum(combinations(numbers, 2), matches) - matchesOf5 * 10 - matchesOf4 * 6 - matchesOf3 * 3;
  return `${matchesOf2} ${matchesOf3} ${matchesOf4} ${matchesOf5}`;
};
