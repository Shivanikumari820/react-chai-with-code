// const score = 500
// console.log(score)

// const numbers = new Number(100)             // Give in the form of numbers
// console.log(numbers);
// console.group(numbers.toFixed(2));        // 100.00

// console.group(numbers.toString());            // convert numbers  in string by the toString keyword    
// console.group(numbers.toString().length);      // then you access the string prototype

// const otherNumber = 123.8493
// console.log(otherNumber.toPrecision(4));       //123.8

// const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));    // 1,00,000


//++++++++++++++++++++++ MATHS +++++++++++++++++++++++++

console.log(Math);              // Object [Maths] {}    
console.log(Math.abs(-4));      // 4 
console.log(Math.round(4.6));   // 5
console.log(Math.ceil(4.2));    // 5
console.log(Math.floor(4.9));   //4
console.log(Math.min(4, 3, 6, 8)); //3
console.log(Math.max(4, 3, 6, 8));  // 8

console.log(Math.random());    //0.528149698117131  ,  Math.random ki value lies between 0 and 1 always and always
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


