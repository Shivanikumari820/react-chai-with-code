// Create a number object
const numbers = new Number(100);      
console.log(numbers);                 // Outputs: [Number: 100]

console.log(numbers.toFixed(2));      // 100.00 (fixed to 2 decimal places)
console.log(numbers.toString());      // "100" (convert number to string)
console.log(numbers.toString().length); // 3 (length of the string "100")

// Precision example
const otherNumber = 123.8493;
console.log(otherNumber.toPrecision(4)); // "123.8" (rounds to 4 significant figures)

// Format number for Indian locale
const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN')); // "1,00,000" (formatted with commas as per Indian system)

//++++++++++++++++++++++ MATHS +++++++++++++++++++++++++
console.log(Math);              // Outputs the Math object

// Absolute value
console.log(Math.abs(-4));      // 4

// Rounding methods
console.log(Math.round(4.6));   // 5 (rounds to nearest integer)
console.log(Math.ceil(4.2));    // 5 (rounds up to the nearest integer)
console.log(Math.floor(4.9));   // 4 (rounds down to the nearest integer)

// Min and Max
console.log(Math.min(4, 3, 6, 8)); // 3 (smallest value)
console.log(Math.max(4, 3, 6, 8)); // 8 (largest value)

// Random values
console.log(Math.random());              // Random value between 0 and 1
console.log((Math.random() * 10) + 1);        // Random value between 1 and 10 (not rounded)
console.log(Math.floor(Math.random() * 10) + 1);      // Random integer between 1 and 10



// Generate Random Numbers Between a Range
const min = 10;
const max = 20;

// Random integer between min and max (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1)) + min);      //IMP formaula
