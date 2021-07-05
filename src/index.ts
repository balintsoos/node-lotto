import { combinations } from './combinations';
import { transformLine } from './input';
import { get, increaseByOne, key } from './map';

const pick5 = new Map<string, number>();
const pick4 = new Map<string, number>();
const pick3 = new Map<string, number>();
const pick2 = new Map<string, number>();

const handleLine = (line: string): void => {
  const arr = transformLine(line);
  // calculate every possible 5/4/3/2 number long keys from line and increment counters in maps
  increaseByOne(key(arr), pick5);
  combinations(arr, 4).forEach((combination) => increaseByOne(key(combination), pick4));
  combinations(arr, 3).forEach((combination) => increaseByOne(key(combination), pick3));
  combinations(arr, 2).forEach((combination) => increaseByOne(key(combination), pick2));
};

const handleResult = (line: string): void => {
  const result = transformLine(line);
  const winnersOf5 = get(key(result), pick5);
  // winners cannot win mutiple prizes so when we count winners we need to
  // subtract the the picks that are belong to winners for a higher pick
  const winnersOf4 =
    combinations(result, 4).reduce((sum, combination) => sum + get(key(combination), pick4), 0) - winnersOf5 * 5;

  const winnersOf3 =
    combinations(result, 3).reduce((sum, combination) => sum + get(key(combination), pick3), 0) -
    winnersOf5 * 10 -
    winnersOf4 * 4;

  const winnersOf2 =
    combinations(result, 2).reduce((sum, combination) => sum + get(key(combination), pick2), 0) -
    winnersOf5 * 10 -
    winnersOf4 * 4 -
    winnersOf3 * 5;

  console.log(`${winnersOf2} ${winnersOf3} ${winnersOf4} ${winnersOf5}`);
};

handleLine('1 2 3 4 5');
handleLine('1 2 3 4 5');
handleLine('1 2 3 4 6');
handleLine('1 2 3 7 6');
handleLine('1 2 8 7 6');
handleLine('1 2 8 7 6');
handleLine('1 9 8 7 6');
console.log('READY');
handleResult('1 2 3 4 5');
