// convert in Number ------------------->>>
// let score = 33
let score ="33abc"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)     // conver string into number
console.log(typeof valueInNumber);    // print that type 
console.log(valueInNumber);           // print that number and it give NaN (Not and Number) bcz vo alphanumeric h na 


// "33"  =>  33
// "33abc" => NaN   
// true => 1; false => 0


// convert in boolean ------------------->>>
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);             //Boolean 
console.log(booleanIsLoggedIn);                    // 1 => true

// 1 => true;  0 => false
// "" => false
// "shivani" => true


// convert in string------------------->>>
let someNumber = 11

let stringNumber = String(someNumber)
console.log(typeof stringNumber);             //string
console.log(stringNumber);                    // 11


/*

1. Addition (+) Operator: 
Agar tum string aur number ko + se jodte ho, toh JavaScript number ko string mein convert karke concat karta hai.

let result = "5" + 2;
console.log(result); // "52" (string)


2. Other Arithmetic Operators (-, *, /, %)
Yeh operators string ko number mein convert karne ki koshish karte hain (agar possible ho).

let result1 = "5" - 2; // 3
let result2 = "5" * 2; // 10
let result3 = "10" / 2; // 5

3. Agar string non-numeric ho:
Agar string mein number nahi hai, toh result NaN (Not a Number) ho sakta hai.

let result = "hello" - 2;
console.log(result); // NaN           */

