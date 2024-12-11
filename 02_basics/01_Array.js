// array

const myArr = [0, 1, 2, 3, 4, 5]   //or
const myHeors = ["shaktiman", "naagraj"]
//or
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);                 // 1
console.log(typeof myArr);             // Array is type of object
//Array methods

myArr.push(6)         // [0, 1, 2, 3, 4, 5, 6]
myArr.push(7)         // [0, 1, 2, 3, 4, 5, 6, 7]
myArr.pop()           // remove last value 

myArr.unshift(9);     // Adds `9` at the start: [9, 0, 1, 2, 3, 4, 5, 6]
myArr.shift();        // Removes the first element (`9`): [0, 1, 2, 3, 4, 5, 6]

console.log(myArr.includes(9));    // false
console.log(myArr.indexOf(3));     // 3

console.log(myArr);    

const newArr = myArr.join();   // Converts `myArr` to a comma-separated string: "0,1,2,3,4,5,6"           // Output: `"string"`
console.log(typeof newArr);    // output : string


// slice, splice

console.log("A", myArr);

//slice
const myn1 = myArr.slice(1, 3);  // Extracts elements from index `1` to `2` (excludes `3`): [1, 2]
console.log(myn1);               // [ 1, 2 ]

// splice
const myn2 = myArr.splice(1, 3);  // Removes 3 elements starting at index `1`: [1, 2, 3]
console.log(myn2);                 // [ 1, 2, 3 ]    
console.log(myArr);   // Output: [0, 4, 5, 6] (after `splice`)



//Another example of slice and splice --->

//slice
const arr1 = [0, 1, 2, 3, 4, 5];
//Syntax  ==  array.slice(startIndex, endIndex);
const sliced = arr1.slice(1, 4); // Extracts elements from index 1 to 3
console.log(sliced);           // Output: [1, 2, 3]
console.log(arr1);              // Original array: [0, 1, 2, 3, 4, 5]

// splice
const arr2 = [0, 1, 2, 3, 4, 5];
// Syntax  == array.splice(startIndex, deleteCount, item1, item2, ...);
const spliced = arr2.splice(1, 3, 10, 20); // Removes 3 elements starting at index 1 and adds 10, 20
console.log(spliced);          // Output: [1, 2, 3] (removed elements)
console.log(arr2);              // Modified array: [0, 10, 20, 4, 5]




/*
Comparison Table-------->>
  
Feature          |        	slice()	                                 |         splice()
|
Purpose	         |    Extracts a portion of the array.	             |   Modifies the array by adding/removing.
Original Array	 |    Unchanged	                                     |   Modified
Return Value	 |    New array with extracted elements.	         |       New array of removed elements.
Arguments	     |    startIndex, endIndex.	                         |   startIndex, deleteCount, items.
Use Case	     |    To copy or extract elements without change.	 |   To modify the array by removing/adding.     */