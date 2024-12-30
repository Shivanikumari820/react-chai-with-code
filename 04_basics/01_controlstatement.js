let x;

if ((x = 10) > 5) {
    console.log(`x was assigned ${x} and is greater than 5.`);
} else {
    console.log("x is less than or equal to 5.");
}


/*
Assignment Operators = assign values to variables and sometimes combine operations like addition, subtraction, etc.

Operator	                            Description	                     Example	                        Equivalent

=	                                    	                              x = 5	                           Assign 5 to x
+=	                                    Add and assign	                  x += 3	                        x = x + 3
-=                                  	Subtract and assign	              x -= 2                         	x = x - 2
*=                                  	Multiply and assign	              x *= 2                         	x = x * 2
/=                                  	Divide and assign	              x /= 2                         	x = x / 2
%=	                                    Remainder and assign	          x %= 3	                        x = x % 3
**=	                                    Exponentiate and assign	          x **= 3	                        x = x ** 3
&=	                                    Bitwise AND and assign	           x &= 3	                        x = x & 3


`=`                                     Bitwise OR and assign	               `x`
^=	                                    Bitwise XOR and assign         	  x ^= 1	                         x = x ^ 1
<<=	                                    Left shift and assign	          x <<= 2	                         x = x << 2
>>=	                                    Right shift and assign         	  x >>= 1	                         x = x >> 1
>>>=	                                Unsigned right shift and assign	  x >>>= 1	                         x = x >>> 1



Strict Operators = check both value and type comparison, avoiding type coercion.

Operator	                             Description	                         Example	                                 Result

===	                                  Strict equality (value + type)	         5 === "5"	                              false (different types)
                                                                                 5 === 5	                              true
!==                                  Strict inequality (value + type)	         5 !== "5"	                               true 
                                                                                 5 !== 5                                   false

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                   
                                                                                 */
// affect of let(local scope) or var(global scope) in scope

const score = 400

if(score>400) {
    // let power = "fly"    // show error if we access them in global 
       var power = "fly"   // access globally
    console.log(`user power:${power}`);
}

console.log(`user power:${power}`);

//---------------------------------------------------------------------------------------------------

const balance = 1000

//if(balance > 500) console.log("test"), console.log("test2")    // not a good way

 
//-------------------------------------------------------------------------------------------------------------------

//Nested loop 
const balancee = 1000

if (balancee <500){
    console.log("less than 500");
}
else if (balancee < 750) {
    console.log("less than 750");
}
else if (balancee < 900) {
    console.log("less than 900");
}
else (balancee < 2000); {
    console.log("less than 2000");
}




// && and || operator use 

const userLoggedIn = true 
const debitCard = true
const loggedInFromGoogle = false 
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail || true){
    console.log("User logged in");
}
                                                                                 
