// while loop 

/* initialization
   while (condition) {

   iteration
 } */

let index = 0 
while (index <= 10) {
    console.log(`Value of index is  ${index}`);
    index = index + 2
    
}


let myArray = ["flash", "batman", "superman"]

let arr = 0 
while(arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
}


//do while loop 

/*
initialization
do {

    iteration
}
 while (condition) */


 
 let score = 1
//  let score = 11    // ye initialization me bhi loop atleast ek baar to run krega then check krega condition
  
  do { 
    console.log(`Score is ${score}`);
    score++
  }
    while(score <= 10);
