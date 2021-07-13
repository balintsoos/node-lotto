# node-lotto

> Count the number of lottery winners

## How to start?

First, you will need [Node.js](https://nodejs.org/). This application is built on version `16.3.0`.

If Node is already installed on your computer now you can install dependencies, build and then start the application with these commands:

```
$ npm install
$ npm run build
$ npm start input.txt
```

The first argument is the path for the input file.

After the input file is processed a `READY` message will be printed to the console. This may take a while. During my testing the processing of the provided input file with 10 million lines took 2-3 minutes and used almost 700MB of memory.

### Example usage

```
$ cat input.txt
1 2 3 4 5
1 2 3 4 9
1 2 3 9 8
1 2 9 8 7
1 9 8 7 6

$ npm start input.txt
READY
> 1 2 3 4 5
1 1 1 1
```

## Technical details

The first stage of the application is reading from the input file. We are implementing a map data structure where the keys are every possible 2, 3, 4, 5-combinations of the given 5 numbers in an input file line and the values are the number of occurences of these keys in the whole input file. To fill this map we have to calculate these combinations and adding them to the map for each line in the input file.

If we assume that inserting into the map can be done in `O(1)` then this part has `O(n)` complexity. JavaScript maps are implemented with [deterministic hash tables](https://wiki.mozilla.org/User:Jorend/Deterministic_hash_tables) in V8 so if we are not mentioning rehashing this is a fair assumption.

The maximum size of the map will be `26*n` on worst case because:

`C(5,5) + C(5,4) + C(5,3) + C(5,2) = 1 + 5 + 10 + 10 = 26`

where `C(n,k)` is the number of k-combinations of n elements.

This could cause a problem because the maximum number of entries in a Node.js map is `2^24 = 16 777 216`. For example for 10 million unique lottery picks it would mean that we cannot store all the 260 million entries in a single map.

But it's not realistic to think that every lottery pick will be unique. In the real world we will have a bunch of recurring numbers so the size of the map will potentially be far less than that. During my testing with the provided input file with 10 million lines (with recurrences) the number of entries in the map was only `11 621 874`. If we want to handle more than 10 million lottery picks in the future and get close to the maximum map size then we could try to split our single map into 4 different maps, one map for each k-combination category.

The second stage of the application is receiving the selected lottery numbers and returning the number of winners in each category. This will be the easy part because we already have this information in our map. We just need to calculate the previously mentioned k-combinations for the newly acquired lottery numbers to find the keys and adding the values together for every category. Oh, but we have a problem now! If someone for example had 5 matches we counted it as having 4, 3, and 2 matches multiple times as well. This cannot be right, they cannot win in more than one category with a single ticket so we need to subtract the number of winners times the number of k-combinations for each previously summed-up category.

If we assume that the retrival from the map is `O(1)` then this part's asymptotic complexity is `O(1)` as well.

## How much work I put into it?

I worked on this project in total for ~6 hours.

- 1-2 hours on planning, gathering resources and thinking about the problem
- 3-4 hours on the implementation
- 1 hour on this README

## What technologies are used?

- Node.js
- Typescript

## Any room for improvement?

For sure:

- unit and e2e testing
- performance testing for runtime and memory usage
- splitting the map into 4 other maps as mentioned previously

## Useful resources that helped me

- [Number of k-combinations](https://en.wikipedia.org/wiki/Combination#Number_of_k-combinations)
- [[V8 Deep Dives] Understanding Map Internals](https://itnext.io/v8-deep-dives-understanding-map-internals-45eb94a183df)
- [Maximum number of entries in a Node.js Map](https://stackoverflow.com/questions/54452896/maximum-number-of-entries-in-node-js-map)
