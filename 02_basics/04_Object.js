//const tinderUser = new Object()// singleton   ==> meaning you can create multiple independent instances of objects.

const tinderUser = {}           // non singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);          // { id: '123abc', name: 'Sammy', isLoggedIn: false }


//Nested Object Example--->> allow representing hierarchical data.
const regularUser = {
    email : "some@gmai.com",
    fullname: {
        userfullname : {
              firstname: "shivani",
              lastname : "kumari"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);  //shivani   --> Access nested properties using dot notation
// console.log(regularUser.fullname?.userfullname.firstname);  // check that key value is present or not   -> The ?. operator checks if a property exists before accessing it.  If any property in the chain is undefined or null, it stops evaluation and returns undefined.


// Using Object.assign() -> merges properties from source objects (obj1, obj2) into a target object ({}).
const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}

//const obj3 = { obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2 )     // {} = target , (obj1, obj2) = source
console.log(obj3);        //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// another method--->Using Spread Syntax
const obje3 = {...obj1, ...obj2}
console.log(obje3);                  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


/*
const users = [
    {...
    },
    {...
    },
    {...
    },
    {...
    },
]

users[1].email           // 1 means jo ek array h usme bhot sare objects h isliye yha 1st array ka email wala object chahiye
*/

console.log(tinderUser);     // { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser));   //[ 'id', 'name', 'isLoggedIn' ]             // Returns an array of property names.
console.log(Object.values(tinderUser));   // [ '123abc', 'Sammy', false ]            // Returns an array of property values.
console.log(Object.entries(tinderUser));   // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]    // Returns an array of key-value pairs as arrays.
 


//Checking Object Property Existence -> The method returns false because 'iSLoggedIn' does not match the actual property name 'isLoggedIn'.

console.log(tinderUser.hasOwnProperty('iSLoggedIn'));    // false