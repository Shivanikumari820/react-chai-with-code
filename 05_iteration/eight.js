// reduce() Flow method

const myNums = [1, 2, 3, 4] 

const myTotal = myNums.reduce(function (accumulator, currentvalue) {  //Callback Function:
    console.log(`accumulator : ${accumulator} and currentvalue : ${currentvalue}`);
    return accumulator + currentvalue
} , 0)                                             // The initial value of the accumulator is set to 0 in this case.


// by arrow fxn------------>>
//const myTotal = myNums.reduce( (accumulator, currentvalue) => accumulator+currentvalue, 0)


console.log(myTotal);           // output : 10

/* accumulator : 0 and currentvalue : 1
accumulator : 1 and currentvalue : 2
accumulator : 3 and currentvalue : 3
accumulator : 6 and currentvalue : 4 */



/*
step-by-Step Execution
Let’s see how the function works for each element in the array [1, 2, 3, 4]:

Step 1:

accumulator = 0 (initial value)
currentvalue = 1 (first element of the array)
accumulator + currentvalue = 0 + 1 = 1
Log: accumulator: 0 and currentvalue: 1
Step 2:

accumulator = 1 (result from Step 1)
currentvalue = 2 (second element)
accumulator + currentvalue = 1 + 2 = 3
Log: accumulator: 1 and currentvalue: 2
Step 3:

accumulator = 3 (result from Step 2)
currentvalue = 3 (third element)
accumulator + currentvalue = 3 + 3 = 6
Log: accumulator: 3 and currentvalue: 3
Step 4:

accumulator = 6 (result from Step 3)
currentvalue = 4 (fourth element)
accumulator + currentvalue = 6 + 4 = 10
Log: accumulator: 6 and currentvalue: 4

Final Result
After all iterations, the total = 10*/


// next example ---------------------------------------------------------------------------------->> This code calculates the total price of all the items in a shopping cart using the reduce() method.
const shoppingCart = [
    {
        itemName: "js course",
        price : 2999
    },
    {
        itemName: "cpp course",
        price : 3999
    },
    {
        itemName: "py course",
        price : 4999
    },
    {
        itemName: "ruby course",
        price : 1999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price , 0) 

console.log(priceToPay);    // 13996


/*
Step-by-Step Execution--->
Initial Setup:

acc starts at 0 (as specified in reduce()).
The function iterates over each object in the shoppingCart array.
Iteration 1:

Current item: { itemName: "js course", price: 2999 }
acc = 0 + 2999 = 2999
Iteration 2:

Current item: { itemName: "cpp course", price: 3999 }
acc = 2999 + 3999 = 6998
Iteration 3:

Current item: { itemName: "py course", price: 4999 }
acc = 6998 + 4999 = 11997
Iteration 4:

Current item: { itemName: "ruby course", price: 1999 }
acc = 11997 + 1999 = 13996


Final Result
After all iterations, the total price is 13996 */