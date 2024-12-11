//singleton
// object.create


// object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Shivani",
    "full name" : "shivu",    
    age : 18,
    location : "Delhi",
    email : "shivani@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"],
    [mySym] : "mykey1"
}

console.log(jsUser.email);           // Output: shivani@google.com
// console.log(jsUser[email]);
console.log(jsUser["full name"]);    // output : shivu
console.log(jsUser[mySym]);          // mykey1

/*NOTE : 
Properties can be accessed using dot notation (jsUser.email) or bracket notation (jsUser["full name"]).
Bracket notation is necessary for properties with spaces or special characters and symbol keys. */


// change value of object keys   
jsUser.email = "shivu@gmail.com"
console.log(jsUser.email);              // output : shivu@gmail.com


//freeze the value of the object keys --> means koi change na kr paye  ==> Object.freeze() makes an object immutable, preventing modifications to its properties.
// Object.freeze(jsUser);
jsUser.email = "gsdhuih@gmail.com"    // example lekr dekhlo ye wali value nhi aayegi bcz usse phle hi hamne freeze kr diya h 
//console.log(jsUser.email);            // output : shivu@gmail.com



jsUser.greeting = function(){
    console.log("Hello js user");
}

jsUser.greetingTwo = function() {
    console.log(`Hello js user, ${this.name}`);  // this refers to the object (jsUser) itself when the method is called.       // Methods are invoked using dot notation, and template literals are used in greetingTwo for dynamic string construction.
}

console.log(jsUser.greeting());   // output : Hello js user , iske sath undefined bhi aata h output me 
console.log(jsUser.greetingTwo());  //output :  Hello js user, Shivani   ,, iske sath bhi undefined bhi aata h output me
 
