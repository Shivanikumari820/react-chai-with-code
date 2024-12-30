

const userEmail = " ";                      // Non-empty string (even with just a space)

if (userEmail) {
    console.log("Got user email");           // Runs because non-empty strings are truthy
} else {
    console.log("Don't have user email");
}



// truthy values == means true wala condition kb run hoga ky ky chije aane pr 
// "0", "false", " ", [], {}, function(){}

// falsy values  == means false condition kb run hoga
// false, 0 , -0 , BIgInt 0n, "", null, undefined, NaN

if (userEmail.length === 0) {
    console.log("Array is empty");
}
else{
    console.log("not");
}




// Nullish Coalescing Operator (??): null undefined   == The ?? operator returns the first operand if it is not null or undefined; otherwise, it returns the second operand.

let val1, val2, val3;

// Examples:
val1 = 5 ?? 10;
console.log(val1); // 5,                  because 5 is neither `null` nor `undefined`

val2 = null ?? 10;
console.log(val2); // 10,                  because the first value is `null`

val3 = undefined ?? 10;
console.log(val3); // 10,                   because the first value is `undefined`

val4 = null ?? 10 ?? 20;
console.log(val4); // 10,                   because the first non-nullish value is 10



// Ternary Operator  = The ternary operator is a shorthand for if-else statements.

// SYNTAX === >  condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")       // Output: "less than 80" (because 100 >= 80 is true)
 

