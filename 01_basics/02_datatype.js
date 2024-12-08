"use strict"; //treat all js code as newer version           ECMA check also 

// alert(3 + 3 // we are using nodejs, not browser




let name = "shivani"          //string
let age = 19                  //number
let isLogged = false          //boolean
let store = ""                //null
let state;                    //undefined

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value means string khali = ""
// undefined => only declare varaible not assign value= let accoundId;
// symbol => unique
// object


console.log(typeof undefined);     //undefined
console.log(typeof null);       //object (its issue of js)















// DataTypes ----->


//  1. Numbers 

let num1 = 3.14;           //automatically assign datatypes like float int etc.
let num2 = 10;

console.log(num1 + num2);

//  2. Strings
const Name = "Piyush";
console.log(Name);

const Lastname = 'Kumar';
console.log(Name + ' ' + Lastname) 


//  3. Boooleans      1 / 0           
let isLoggedIn = false

console.log(isLoggedIn)

//  4. NULL

let lastLoggedIn = " "    //kuch nhi value denge bs

console.log(lastLoggedIn)

lastLoggedIn = 10           // ham any value rkh skte h 

console.log(lastLoggedIn)


//  5. Undefined            // means not define here
let lastLoginDate;

console.log(lastLoginDate)

//  6. Objects

const person = {
    firstName : 'shivani',          // always seprated by comma
    lastName : 'kumari',
    age : 19,
    isLoggedIn: false,
    lastLoggedIn: null

}

console.log(person)
console.log(person.firstName)
console.log(person.age)


// Operators ----> + , - , * , /

//Typeof operator
 console.log(typeof('123' * 1))
 console.log(typeof(lastLoggedIn))
 console.log(typeof num2)





