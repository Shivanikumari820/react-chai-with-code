 
 function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("I");
 }

 // sayMyName() 

 // Add two numbers -->
 function addTwoNumbers(number1, number2){       // here number1 and number2 are parameter
    // console.log(number1 + number2)

    let result = number1 + number2
    return result   
    // or 
    // return number1 + number2

   // console.log("shivnai")   // after return k baad kuch bhi execute nhi hota agr ye upr rhta to execute hota 
 }

 //addTwoNumbers(3, 4)         // 7    here 3 and 4 are arguments
 const result = addTwoNumbers(3, 4)
 console.log("Result: ", result);     // 7 Result: undefined    , so solve this issue we do if declare result in the function and return result then output : Result : 7


 //loginUserMessage function--->>
 function loginUserMessage(username) {    //give default value in place of username
    if (username == undefined) {
        console.log("please enter a username");
        return; // Exit the function here if no username is provided
    }
    return `${username} just logged in`; // Return the message if a username is provided
}


console.log(loginUserMessage("hitesh")) // hitesh just logged in
console.log(loginUserMessage("")) //  just logged in    ,, (username is "" (an empty string), but it is not undefined, so it skips the if block.It reaches the return statement, returning " just logged in".)
console.log(loginUserMessage()) // please enter a username   then  undefined    ((because no value was passed).)
