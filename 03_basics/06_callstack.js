/*What is the Call Stack?
The call stack is a stack data structure used by JavaScript to keep track of function calls. 
When a function is called, it's added (pushed) to the call stack. 
When the function finishes executing, it's removed (popped) from the call stack. */


function greet() {
    console.log("Hello!");
}

function sayHi() {
    greet();   // Call greet function
    console.log("Hi!");
}

sayHi();  // Start execution by calling sayHi




// Steps to call stack  ---->> 

/*Step 1: sayHi() is called
Call Stack: [ sayHi() ]

Step 2: greet() is called from inside sayHi
Call Stack: [ sayHi(), greet() ]

Step 3: greet() executes and finishes
Call Stack: [ sayHi() ]

Step 4: sayHi() finishes execution
Call Stack: []*/
