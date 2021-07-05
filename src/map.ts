export const get = (key: string, map: Map<string, number>): number => map.get(key) ?? 0;

export const increaseByOne = (key: string, map: Map<string, number>) => map.set(key, get(key, map) + 1);

export const key = (arr: number[]): string => arr.toString();
