let value = 3
let negValue = -value 
console.log(negValue);           // -3

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);        // 2 ki power 2
console.log(2**3);         // 2 ki power 3
console.log(2/2)
console.log(2%2)

//add two string
let str1 = "shivani"
let str2 = "Kumari"

let str3 = str1 + str2
console.log(str3);


//why conversion of string is so confusing ---->

//string '1' + '1' = string
//string + number = string
//string * number = number

console.log('1' + '1')          //11  string ki form m 
console.log('1' + 11)           //111 
console.log('1' * 11)           //11 aayega but number ki form me , [ so if you want to change a string into number , then multiply that no. by 1 ]
        //  or
console.log('123'* 1)          //123
console.log("1"+ 2 + 2);       //122
console.log(1 + 2 + "22");     // first add 1 + 2 = 3 then (3+"22")=322

// NOTE:--  if string is first then all number convert in string and if string is in last then first do operation in the question then convert with string

console.log(+true);            // 1     and (true+) not allowed    = + converts values to numbers.
console.log(+"");              // 0     bcz ,empty string → 0    → converts to 0)


// Notes: When comparing a string and a number using relational operators like >, <, >=, <= — JavaScript converts the string to a number first.
console.log("2" > 1);     // "2" → number → 2 > 1 → true ✅
console.log("02" > 1);    // "02" → number → 2 > 1 → true ✅


console.log(null > 0);                // false       //null is converted to 0             
console.log(null == 0);               // false      //But null == 0 → false because == doesn’t treat null as 0
console.log(null >= 0);               // true        null ko change kiya 0 me then compare


// undefined is not converted to a number during comparison → result is always false.
console.log(undefined > 0);              // false
console.log(undefined == 0);             // false
console.log(undefined >= 0);             // false
console.log(undefined < 0);              // false


// strict check -->>  === , check by 3 equal  (=== checks both value and type)

console.log ("2" > 2);                   // false , bcz there datatypes is different one is string and second is number , it is strictly check
 

/*🔁 Prefix (++x / --x)   = Value is updated first, then used in the expression.
let x = 5;
let y = ++x; // First increase x, then assign
console.log(x); // 6
console.log(y); // 6

🔁 Postfix (x++ / x--)  = Value is used first, then updated.
let x = 5;
let y = x++; // First assign x, then increase
console.log(x); // 6
console.log(y); // 5 */