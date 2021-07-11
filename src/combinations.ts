// start & end ---> Staring and Ending indexes in original array
// index ---> Current index in temp array
const combinationUtil = (
  originalArr: number[],
  tempArr: number[],
  start: number,
  end: number,
  index: number,
  sizeOfCombination: number,
  result: number[][],
): void => {
  if (index === sizeOfCombination) {
    result.push([...tempArr]);
    return;
  }
  // replace index with all possible elements. The condition
  // "end-i+1 >= sizeOfCombination-index" makes sure that including one element
  // at index will make a combination with remaining elements at remaining positions
  for (let i = start; i <= end && end - i + 1 >= sizeOfCombination - index; i++) {
    tempArr[index] = originalArr[i];
    combinationUtil(originalArr, tempArr, i + 1, end, index + 1, sizeOfCombination, result);
  }
};

export const combinations = (arr: number[], sizeOfCombination: number): number[][] => {
  const result: number[][] = [];
  combinationUtil(arr, new Array(sizeOfCombination), 0, arr.length - 1, 0, sizeOfCombination, result);
  return result;
};
