export const combinations = (numbers: number[], k: number): number[][] => {
  const result: number[][] = [];
  recurseCombinations(numbers, k, result, new Array(k), 0, 0);
  return result;
};

const recurseCombinations = (
  numbers: number[],
  k: number,
  result: number[][],
  temp: number[],
  tempIndex: number,
  numbersIndex: number,
) => {
  if (tempIndex === k) {
    result.push([...temp]);
    return;
  }
  if (numbersIndex === numbers.length) {
    return;
  }
  temp[tempIndex] = numbers[numbersIndex];
  recurseCombinations(numbers, k, result, temp, tempIndex + 1, numbersIndex + 1);
  recurseCombinations(numbers, k, result, temp, tempIndex, numbersIndex + 1);
};

export const combination = (n: number, k: number): number => factorial(n) / (factorial(k) * factorial(n - k));

const factorial = (n: number): number => (n > 1 ? n * factorial(n - 1) : 1);
