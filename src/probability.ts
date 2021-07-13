export const combinations = (numbers: number[], k: number): number[][] => {
  const result: number[][] = [];
  recurseCombinations(numbers, k, result, new Array(k), 0, numbers.length - 1, 0);
  return result;
};

const recurseCombinations = (
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
  for (let i = start; i <= end && end - i + 1 >= k - index; i++) {
    temp[index] = numbers[i];
    recurseCombinations(numbers, k, result, temp, i + 1, end, index + 1);
  }
};

export const combination = (n: number, k: number): number => factorial(n) / (factorial(k) * factorial(n - k));

const factorial = (n: number): number => (n > 1 ? n * factorial(n - 1) : 1);
