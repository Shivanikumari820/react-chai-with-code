const marvel_heros = ["thor", " Ironman", "spiderman"]
const dc_heros = ["spiderman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);        // ['thor', ' Ironman', 'spiderman', [ 'spiderman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]);    // flash    // Access nested array== means bracket ko 1 index consider krenge jo upr output aaya h usme o 1 2 3 and 3 no pr bracket me jo element h uska 1st element vo nested array h


// concatenating Array = concat() merges arrays without nesting, creating a flat, combined array
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);                          // ['thor', ' Ironman', 'spiderman', 'spiderman', 'flash', 'batman']                

//Using Spread Operator for Concatenation  = same as concatenation , but more versatile , means ham ek sath kitne bhi array ko concat kra skte h by the help of spread means 3 dot ( ex. jese kaanch ka glass niche girega to spread ho jayeg aaese hi ham kitne bhi glass gira skte h ek sath uske kaanch ko spread krne k liye)
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);                    // ['thor', ' Ironman', 'spiderman', 'spiderman', 'flash', 'batman']  


// Flattening Nested Arrays == flat(Infinity) flattens arrays recursively to any depth, turning deeply nested arrays into a single-level array. --> depth means kitne bracket tk usko spread krna h 
const another_array = [1, 2, 3, [4, 5, 6] ,7, [6,7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);                      // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4,5]


//Checking and Converting Array
console.log(Array.isArray("shivani"));         // false
console.log(Array.from("shivani"));            // [ 's', 'h', 'i','v', 'a', 'n', 'i' ]→ Converts a string to an array of characters.
console.log(Array.from({name: "Shivani"})); //interesting   // [] → `Array.from()` does not work with objects unless they are iterable (like strings or arrays).



// Creating Arrays with Array.of   == Array.of() creates an array directly from given arguments.
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));     // [ 100, 200, 300 ]  