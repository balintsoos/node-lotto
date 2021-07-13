import { combinations } from './probability';
import { add } from './matches';

export const registerNumbers = (numbers: number[], matches: Map<number, number>): void => {
  [numbers, ...combinations(numbers, 4), ...combinations(numbers, 3), ...combinations(numbers, 2)].forEach(
    add(matches),
  );
};
