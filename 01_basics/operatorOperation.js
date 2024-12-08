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

console.log(+true);            // 1     and (true+) not allowed
console.log(+"");              // 0     bcz "" return false


console.log("2" > 1);           // true , first convert in number 2 then compare
console.log("02" > 1);          // true



console.log(null > 0);                // false                    
console.log(null == 0);               // false
console.log(null >= 0);               // true        null ko change kiya 0 me then compare


console.log(undefined > 0);              // false
console.log(undefined == 0);             // false
console.log(undefined >= 0);             // false
console.log(undefined < 0);              // false


// strict check -->>  === , check by 3 equal

console.log ("2" > 2);                   // false , bcz there datatypes is different one is string and second is number , it is strictly check
 