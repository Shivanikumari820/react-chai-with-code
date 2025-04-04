const nam= "shivani"
const repoCount = 50

console.log(`${nam} +${ repoCount} + "Kumari"`)       


//Template literals = uses a insert variables directly into a string. 
console.log(`Hello my name is ${nam}  and my repo count is ${repoCount}`);      // Output: Hello my name is shivani and my repo count is 50


// String Object:
const gameName = new String('shivani-htc')

// This displays the prototype object for String, which contains methods available for all strings (like .charAt, .toUpperCase, etc.).
console.log(gameName.__prot__);       

// 3. Common String Methods---->
console.log(gameName[0]);            // 's'
console.log(gameName.length);        // 11
console.log(gameName.charAt(2));     // 'i'
console.log(gameName.toUpperCase()); // 'SHIVANI-HTC'
console.log(gameName.indexOf('t'));  // 9


// convert in substring 
const newString = gameName.substring(0, 4);
console.log(newString); // 'shiv' (excludes 4th index)  


//Slice  = slice(start, end) (Supports negative indexes)
     // Extracts characters starting from the -10th index to index 4. Negative indices count from the end.
let namess = "shivanikumari";
const anotherString = namess.slice(-12 , 9);  
console.log(anotherString);                        // hiv


// ✔️ trim() removes only whitespace characters from both ends.
const newStringOne = "    Shivani   "
console.log(newStringOne);         //    Shivani   
console.log(newStringOne.trim());  // remove extra spaces and trim is only used in white spaces character not for line terminators

// URL Manipulation ------->>
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));     // https://hitesh.com/hitesh-choudhary    //Replaces %20 with '-'.

console.log(url.includes('sundar'))       // false        // check krta h ki ye word h ki nhi = (checks for substring)

console.log(gameName.split('-'))          // [ 'shivani', 'htc' ]      // split in array jo bhi parameter se vo split h vha se 