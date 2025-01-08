// Chaining = Chaining in JavaScript simply means applying multiple operations on an array or data one after another. You can combine methods like map(), filter(), and reduce() in a single line of code, where each method acts on the result of the previous one.

const numbers = [1, 2, 3, 4, 5];

const result = numbers
    .map(num => num * 2)          // Multiply each number by 2
    .filter(num => num > 5)       // Keep numbers greater than 5
    .reduce((sum, num) => sum + num, 0);  // Add them up

console.log(result);  // Output: 24 (6 + 8 + 10)


// next example ---------------------------------------------------------
const myNumers = [ 1, 2,3 ,4, 5, 6, 7]
const newNums = myNumers
           .map((num) => num * 10)
           .map((num) => num + 1)
           .filter((num) => num >= 40)

console.log(newNums);   // [ 41, 51, 61, 71 ]


/*Summary:
Multiply all numbers by 10 →    [10, 20, 30, 40, 50, 60, 70].
Add 1 to each number →         [11, 21, 31, 41, 51, 61, 71].
Keep numbers >= 40 →           [41, 51, 61, 71]. */
