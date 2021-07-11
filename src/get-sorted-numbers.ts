export const getSortedNumbers = (line: string): number[] =>
  line
    .split(' ')
    .map((char) => parseInt(char))
    .sort((a, b) => a - b);
