const name= "shivani"
const repoCount = 50

console.log(name + repoCount + "Kumari")


//Template literals = uses a insert variables directly into a string. 
console.log(`Hello my name is ${name}  and my repo count is ${repoCount}`);    


// String Object:
const gameName = new String('shivani-htc')

console.log(gameName[0]);            //s

// This displays the prototype object for String, which contains methods available for all strings (like .charAt, .toUpperCase, etc.).
console.log(gameName.__prot__);       

console.log(gameName.length);         // 11
console.log(gameName.charAt('2'));    // i        // Character at Specific Position:
console.log(gameName.toUpperCase());   // SHIVANI-HTC
console.log(gameName.indexOf('t'));    // 9

// convert in substring 
const newString = gameName.substring(0, 4)    
console.log(newString);                           // shiv   , jo 4th index pr hoga usko exclude kr denge

//Slice  = Extracts characters starting from the -10th index to index 4. Negative indices count from the end.
const anotherString = gameName.slice(-10 , 4);  
console.log(anotherString);                        // hiv

// for remove extra space , jb hame extra spaces nhi chahiye hoti
const newStringOne = "    Shivani   "
console.log(newStringOne);         //    Shivani   
console.log(newStringOne.trim());  // remove extra spaces and trim is only used in white spaces character not for line terminators

// URL Manipulation ------->>
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));     // https://hitesh.com/hitesh-choudhary    //Replaces %20 with '-'.

console.log(url.includes('sundar'))       // false        // check krta h ki ye word h ki nhi 

console.log(gameName.split('-'))          // [ 'shivani', 'htc' ]      // split in array jo bhi parameter se vo split h vha se 