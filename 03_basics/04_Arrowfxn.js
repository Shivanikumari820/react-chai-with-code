// browser k andr jo globle scope h vo window object h 

const user = {
    username : "shivani",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);         // this keyword is used to access inside context , tum user.username bhi kr skte ho lekin this keyword is specially used
        console.log(this);      //   { username: 'shivani', price: 999, welcomeMessage: [Function: welcomeMessage]}    ye andr k sare context means values dega
    }
}
user.welcomeMessage()     //shivani , welcome to website
user.username = "shiva"
// user.welcomeMessage()      // shiva , welcome to website
console.log(this);           //  {}  kuch bhi andr ka context nhi dega 




/*Key Differences Between this in Different Contexts--->>

Context	                            |             Value of this 
                                    |
Inside an object method	            |        Refers to the object itself (user in this case).
In the global scope (browser)	    |        Refers to the window object.
In the global scope (Node.js)	    |        Refers to an empty object {}.       */



// Why we cant use this keyword in function-->

function chai() {
    let username = "shiavni"
    console.log(this.username);             // Inside the function chai, the variable username is declared with let and is scoped to the function. It is not related to the this contex
}

chai()                    // undefined

// or another function 
 const chai2 = function() {
    let username = "shiavni"
    console.log(this.username);             // Inside the function chai, the variable username is declared with let and is scoped to the function. It is not related to the this contex
    console.log(this)                         // {}
 }

chai2()                              // undefined 




//Arrow function and Return statement
const chai3 = () => {
    let username = "shiavni"
    console.log(this.username);             
    console.log(this)                         // {}
 }

 chai3()                                    // undefined

  
//  When you use curly braces, you must explicitly write return 
 const addTwo = (num1, num2) => {
    return num1 + num2                          // curly bracket use kiya to return likhna pdega 
 }
 console.log(addTwo(3,4))                  //7

     // or 


//  Implicit Return: When you use parentheses () or no curly braces, the value is implicitly returned
         
 //const addTwoo = (num1, num2) => num1 + num2      // or
 const addTwoo = (num1, num2) => ( num1 + num2 )          // or () use kiya to nhi likhna pdta h
 
console.log(addTwoo(3,4))                 // 7


//  Arrow Functions with Objects  --->  but isi ko ham object k liye nhi kr skte bcz object ko define krne k liye curly braces ki jarurat h vo sirf () isme nhi hota
const addThree = (num1,num2) => ({username: "shivani"})

console.log(addThree())                 // { username: 'shivani' }
