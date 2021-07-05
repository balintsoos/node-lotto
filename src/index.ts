import { combinations } from './combinations';
import { transformLine } from './input';
import { get, increaseByOne, key } from './map';

const pick5 = new Map<string, number>();
const pick4 = new Map<string, number>();
const pick3 = new Map<string, number>();
const pick2 = new Map<string, number>();

const arr = transformLine('1 2 3 4 5');

// calculate every possible 5/4/3/2 number long keys from line and increment counters in maps
increaseByOne(key(arr), pick5);
combinations(arr, 4).forEach((combination) => increaseByOne(key(combination), pick4));
combinations(arr, 3).forEach((combination) => increaseByOne(key(combination), pick3));
combinations(arr, 2).forEach((combination) => increaseByOne(key(combination), pick2));

console.log('READY');

const result = transformLine('1 2 3 4 5');

const winnersOf5 = get(key(result), pick5);

// winners cannot win mutiple prizes so reduce number of winners by hit
const winnersOf4 = combinations(result, 4).reduce((sum, combination) => sum + get(key(combination), pick4), 0);

const winnersOf3 = combinations(result, 3).reduce((sum, combination) => sum + get(key(combination), pick3), 0);

const winnersOf2 = combinations(result, 2).reduce((sum, combination) => sum + get(key(combination), pick2), 0);

console.log(
  `${winnersOf2 - winnersOf5 * 10} ${winnersOf3 - winnersOf5 * 10} ${winnersOf4 - winnersOf5 * 5} ${winnersOf5}`,
);
