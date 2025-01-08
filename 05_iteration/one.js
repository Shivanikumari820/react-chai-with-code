// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i < 10; i++) {               
    const element = i;
    if (element == 5) {
        // console.log('5 is best number');
    }
    // console.log(element);
    
}

// console.log(element);    // not accessible in outside


//2nd example--->
for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j}`)
       // console.log(i + '*' + j + ' = ' + i*j );   // The console outputs a multiplication table for numbers 0 through 10.
        
    }
}         

/* output  

0*0 = 0
0*1 = 0
0*2 = 0
...
1*0 = 0
1*1 = 1
1*2 = 2
...
10*8 = 80
10*9 = 90
10*10 = 100 

*/


//for loop on array 
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);        // output : 3
for (let index = 0; index < myArray.length; index++) {   // index < myArray.length  me = ka sign isliye nhi kiya kyonki index 0 se start hoga or 2 tk jayega equal to krte to 3 index ka undefined aaata
    const element = myArray[index];
    console.log(element);    // output : flash batman superman

}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        // console.log(`Detected 5`);
        break;                         // The break statement exits the loop entirely, stopping further iterations.
    }
    // console.log(`Value of 1 is ${index}`);
}


for (let index = 1; index <= 20; index++) {
    if (index == 5){
        // console.log('Detected 5');
        continue;                         // The continue statement skips the current iteration and proceeds with the next iteration of the loop.
    }
    // console.log(`Value of 1 is ${index}`);
}


