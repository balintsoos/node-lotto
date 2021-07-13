import { combinations, combination } from './probability';
import { get, sum } from './matches';

const C_5_4 = combination(5, 4);
const C_5_3 = combination(5, 3);
const C_4_3 = combination(4, 3);
const C_5_2 = combination(5, 2);
const C_4_2 = combination(4, 2);
const C_3_2 = combination(3, 2);

export const getResult = (numbers: number[], matches: Map<number, number>): string => {
  const match5 = get(numbers, matches);
  const match4 = sum(combinations(numbers, 4), matches) - match5 * C_5_4;
  const match3 = sum(combinations(numbers, 3), matches) - match5 * C_5_3 - match4 * C_4_3;
  const match2 = sum(combinations(numbers, 2), matches) - match5 * C_5_2 - match4 * C_4_2 - match3 * C_3_2;
  return `${match2} ${match3} ${match4} ${match5}`;
};
