# node-lotto

> Count the number of lottery winners

## How to start

First, you need to install [Node.js](https://nodejs.org/). This application is built on version 16.3.0.

If Node is already installed on your computer now you can install dependencies, build and then start the application with these commands:

```
$ npm install
$ npm run build
$ npm start input.txt
```

The first argument is the path for the input file.

## Idea

Our application could be separated to 2 parts.

The first part is reading from the input file. We are implementing a map data structure where the keys are every possible 2-3-4-5 long combinations of the given 5 numbers and the values are the number of matches. After that we have to calculate these combinations and adding them to the map for each line in the input file. This part has `O(n)` complexity.

The second part is receiving the lottery picks and returning the number of winners in each category. This will be the easy part because we already have this information in our map. We just need to calculate the previously mentioned combinations for the newly acquired lottery pick to find the keys and adding the values together for every category. Oh, but we have a problem now! If someone for example had 5 matches we counted it as having 4, 3, and 2 matches multiple times as well. This cannot be right, they cannot win in more than one category with a single ticket so we need to subtract the number of winners times the number of combinations for each previously summed-up category. This part has `O(1)` complexity.
