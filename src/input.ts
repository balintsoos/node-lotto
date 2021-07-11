import { createReadStream } from 'fs';
import { createInterface, Interface } from 'readline';

export const createFileInput = (filePath: string): Interface => {
  return createInterface({
    input: createReadStream(filePath),
  });
};

export const createConsoleInput = (): Interface => {
  return createInterface({
    input: process.stdin,
  });
};
