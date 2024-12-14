function one() {
    const username = "shivani"

    function two(){
        const website = "Youtube"
        console.log(username)    // Access global scope in local scope
    }
    //console.log(website);     // cant't access local scope in global 

        two()        
}

 one()     // shivani


// next example --->
if (true) {
    const username = "shivani"; // Block-scoped variable

    if (username === "shivani") {
        const website = " youtube"; // Block-scoped variable
        console.log(username + website); // This will execute only if the condition is true    // Output : shivani youtube
    }

    // console.log(website); // This will throw an error because `website` is block-scoped to the inner `if` block
}

// console.log(username); // This will throw an error because `username` is block-scoped to the outer `if` block



//Make a function in two way :-- 
// 1.
console.log(addOne(6));   //7            // This is a function declaration, which means the function is hoisted to the top of its scope during the JavaScript compilation phase.

function addOne (num) {
    return num + 1
}

// 2.
// console.log(addTwo(5))                      //Variables declared with const (or let) are not hoisted in the same way as function declarations.
const addTwo = function(num){
    return num + 2
}
 
console.log(addTwo(5))            // 7           // To avoid the error, call the function after it is defined




/* 
Feature	                      Function Declaration                           	               Function Expression

Hoisting	         Fully hoisted; can be called before definition.	            Not hoisted in the same way; cannot be used before definition.
Syntax	             function name() {}	                                            const name = function() {}
Use Case	         Best for globally or frequently used functions.	            Best for functions used within specific contexts.       */
