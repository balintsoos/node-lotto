import { createConsoleInput, createFileInput } from './input';
import { registerNumbers } from './register-numbers';
import { getResult } from './get-result';
import { getSortedNumbers } from './get-sorted-numbers';

const matches = new Map<number, number>();
const inputPath = process.argv[2];
const fileInput = createFileInput(inputPath);

fileInput.on('line', (line) => {
  registerNumbers(getSortedNumbers(line), matches);
});

fileInput.on('close', () => {
  console.log('READY');
  createConsoleInput().on('line', (line) => {
    console.log(getResult(getSortedNumbers(line), matches));
  });
});
