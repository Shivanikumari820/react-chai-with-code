// IIFE (Immediately Invoked Function Expression): A function that is  immediately invoked right after it's defined.. // global pollution ko htane k liye ham IIFE ka use krte h 


// function chai() {
//     //named IIFE
//     console.log(`DB CONNECTED`);
// }
// chai();


//upr wale fxn ki trh likhne k bjaye ham aese bhi likh skte h paranthesis me pack krke function ko or uske just baad hi usko call krdenge only give ()
(function chai() {
    //named IIFE
    console.log(`DB CONNECTED`);
}) ();
                                    
// or agr do IIFE ek sath likhne h to make sure its seprated by semicolon;

(() => {                                          //This is an anonymous IIFE (not named) using an arrow function syntax.
    console.log(`DB CONNECTED TWO`);
}) ();


// pass paramenter and arguments in IIFE function 
((name) => {                                            ////This IIFE is an anonymous arrow function that takes a parameter name.
    console.log(`DB CONNECTED TWOO ${name}`);
}) ('hitesh');