export const transformLine = (line: string): number[] =>
  line
    .split(' ')
    .map((char) => parseInt(char))
    .sort();
