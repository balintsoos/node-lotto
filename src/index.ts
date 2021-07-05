const hit5 = new Map();
const hit4 = new Map();
const hit3 = new Map();
const hit2 = new Map();

const increaseByOne = (key: string, map: Map<string, number>) => map.set(key, (map.get(key) ?? 0) + 1);

// read input file by line
// calculate every possible 5/4/3/2/1 number long keys from line and increment counters in maps
increaseByOne('1-2-3-4-5', hit5);
increaseByOne('1-2-3-4', hit4);
increaseByOne('1-2-3', hit3);
increaseByOne('1-2', hit2);

// read result input
// get number of winners from maps
// winners cannot win mutiple prizes so reduce number of winners by hit
const winnersOf5 = hit5.get('1-2-3-4-5');
const winnersOf4 = hit4.get('1-2-3-4') - winnersOf5;
const winnersOf3 = hit3.get('1-2-3') - winnersOf4 - winnersOf5;
const winnersOf2 = hit2.get('1-2') - winnersOf3 - winnersOf4 - winnersOf5;

// print result
console.log(`${winnersOf2}, ${winnersOf3}, ${winnersOf4}, ${winnersOf5}`);
