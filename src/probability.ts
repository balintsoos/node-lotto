// start & end ---> Staring and Ending indexes in original array
// index ---> Current index in temp array
const combinationUtil = (
  numbers: number[],
  k: number,
  result: number[][],
  temp: number[],
  start: number,
  end: number,
  index: number,
): void => {
  if (index === k) {
    result.push([...temp]);
    return;
  }
  // replace index with all possible elements. The condition
  // "end-i+1 >= sizeOfCombination-index" makes sure that including one element
  // at index will make a combination with remaining elements at remaining positions
  for (let i = start; i <= end && end - i + 1 >= k - index; i++) {
    temp[index] = numbers[i];
    combinationUtil(numbers, k, result, temp, i + 1, end, index + 1);
  }
};

export const combinations = (numbers: number[], k: number): number[][] => {
  const result: number[][] = [];
  combinationUtil(numbers, k, result, new Array(k), 0, numbers.length - 1, 0);
  return result;
};

export const combination = (n: number, k: number): number => factorial(n) / (factorial(k) * factorial(n - k));

const factorial = (n: number): number => (n === 0 ? 1 : n * factorial(n - 1));
