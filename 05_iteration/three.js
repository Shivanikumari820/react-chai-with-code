/*for...of
Syntax
for (const element of iterable) {
    // code block to be executed for each element
}

*/

//["", "", ""]   // string in array
//[{}, {}, {}]   /// object in array

const arr = [ 1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num)              // output : 1 2 3 4 5
}

const greetings = "Hello world!"
for (const greet of greetings){
    // console.log(greet);
    // console.log(`Each char is ${greet}`)
}

//Maps   == > In JavaScript, a Map is a built-in object that allows you to store key-value pairs. Unlike regular objects, a Map provides more flexibility in terms of the types of keys you can use and offers additional methods to work with the data

// const map = new Map();

// // Adding key-value pairs and access them :-------------------------------------------------------------------
// map.set('name', 'Alice');       // String key
// map.set(42, 'Answer');          // Number key
// map.set(true, 'Boolean');      // Boolean key

// console.log(map);              // Output: Map(3) { 'name' => 'Alice', 42 => 'Answer', true => 'Boolean' }
// console.log(map.get('name'));  // Output: Alice
// console.log(map.get(true));    // Output: Boolean Key
// console.log(map.size);         // Output: 3



// // Any data type :----------------------------------------------------------------------------
// const map = new Map();

// const obj = { id: 1 };
// const func = function () {};
// const num = 42;

// // Different key types
// map.set(obj, 'Object as a key');
// map.set(func, 'Function as a key');
// map.set(num, 'Number as a key');

// console.log(map.get(obj));  // Output: Object as a key
// console.log(map.get(func)); // Output: Function as a key
// console.log(map.get(num));  // Output: Number as a key


// // Deleting और Checking Keys:-------------------------------------------
// const map = new Map();
// map.set('key1', 'value1');
// map.set('key2', 'value2');

// // Key को check करें
// console.log(map.has('key1')); // Output: true
// console.log(map.has('key3')); // Output: false

// // Key को delete करें
// map.delete('key1');
// console.log(map.has('key1')); // Output: false


// Use loop in map :-----------------------------------------------------------------------------------
const map = new Map();

// Adding key-value pairs
map.set('name', 'Alice');
map.set(42, 'Answer');
map.set(true, 'Boolean');

// Iterating over the map
for (const [key, value] of map) {        // key or value ko alg alg iterate krne k liye use [] kiya h  or ye object me work nhi krte only map me krte h 
    console.log(key, ':-', value);   // output : name :- Alice  42 :- Answer  true :- Boolean
}                                            

/*NOTE: 

--> for...of loop is ideal for iterating over iterable objects, such as arrays, strings, maps, sets, etc. 
 provides a clean and concise syntax compared to traditional for loops or forEach methods 


 2. Iterability in maps and object :

 Maps are inherently iterable, meaning you can directly use for...of to iterate over their key-value pairs.
 Objects are not iterable by default. You cannot directly use for...of with objects unless you explicitly convert them into an iterable form (like using Object.entries())    */