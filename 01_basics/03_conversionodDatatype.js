// let score = 33
let score ="33abc"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)     // conver string into number
console.log(typeof valueInNumber);    // print that type 
console.log(valueInNumber);           // print that number and it give NaN (Not and Number) bcz vo salphanumeric h na 


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



let someNumber = 11

let stringNumber = String(someNumber)
console.log(typeof stringNumber);             //string
console.log(stringNumber);                    // 11
