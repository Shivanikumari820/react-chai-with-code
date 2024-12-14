function calculateCartPrice(...num1){     // rest operator it store multiple value in one parameter
    return num1
}

console.log(calculateCartPrice(200,300,500,4000));  // 200,300,500,4000
//but when we do this-->
function calculateCartPrice2(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice2(200,300,500,4000));   // [500,4000] ,  bcz val1= 200 , val2 = 300 store


// How to pass object in function
const user ={
    username : "shivani",
    prices: 199
}

function handleObject(anyobject) {
      console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`)
}

//handleObject(user)      // Username is shivani and price is 199
//we can also set object here,
handleObject({
    username :"sam",
    prices: 333                        // Username is sam and price is 333
})


// How can pass array in function-->
const myNewArray = [200, 400, 500 , 600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));   // 400
// console.log(returnSecondValue([200, 400 ,500, 600])); // you can set also by default here like object set in function 

