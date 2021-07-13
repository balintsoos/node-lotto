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

## What was I thinking?

Our application could be split into to 2 parts.

The first part is reading from the input file. We are implementing a map data structure where the keys are every possible 2, 3, 4, 5-combinations of the given 5 numbers in an input file line and the values are the number of occurences of these keys in the whole input file. To fill this map we have to calculate these combinations and adding them to the map for each line in the input file so this part has `O(n)` complexity if we can assume that inserting into the map can be done in `O(1)`. JavaScript maps are implemented with [deterministic hash tables](https://wiki.mozilla.org/User:Jorend/Deterministic_hash_tables) in V8 so if we are not mentioning rehashing this is a fair assumption.

The size of the map will be `26*n` on worst case because:

```
C(5,5) + C(5,4) + C(5,3) + C(5,2) = 1 + 5 + 10 + 10 = 26
```

where `C(n,k)` is the number of k-combinations from a given set of n elements

(The size of the map could be less if not every lottery pick is unique.)

The second part of the application is receiving the lottery picks and returning the number of winners in each category. This will be the easy part because we already have this information in our map. We just need to calculate the previously mentioned k-combinations for the newly acquired lottery pick to find the keys and adding the values together for every category. Oh, but we have a problem now! If someone for example had 5 matches we counted it as having 4, 3, and 2 matches multiple times as well. This cannot be right, they cannot win in more than one category with a single ticket so we need to subtract the number of winners times the number of k-combinations for each previously summed-up category. If we assume that the retrival from the map is `O(1)` then this part's asymptotic complexity is `O(1)` as well.

## How much work I put into it?

I worked on this project in total for ~6 hours.

- 1-2 hours on planning and thinking about the problem
- 3-4 hours on the implementation
- 1 hour on this README

## What technologies are used?

- Node.js
- Typescript

## Any room for improvement?

For sure:

- unit and e2e testing
- performance testing for runtime and memory usage

## Useful resources that helped me

- [Number of k-combinations](https://en.wikipedia.org/wiki/Combination#Number_of_k-combinations)
- [[V8 Deep Dives] Understanding Map Internals](https://itnext.io/v8-deep-dives-understanding-map-internals-45eb94a183df)
