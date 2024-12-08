// primitive == call by value

// 7 types : Stringn, Number , Boolean , null , Undefined, Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);       

// const bigNumber = 143532321n;



// Non-Primitive == call by reference

// Array , Objects , Functions
const array = ["shivu", "gejk" , "sdff"]

let myObject = {
    name : "shivani",
    age :18,
}

const myFunctiion = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);           //undefined
console.log(typeof array);              // object

/*

Typeof val                             Result

 undefined                              undefined
 null                                   object          // imp
 Boolean                                boolean
 Number                                  number
 String                                  string
 BigInt                                  undefined
 Function                                function object
 Object                                  object
 Array                                   object
 All non- primitive dataType              give datatype with object  */