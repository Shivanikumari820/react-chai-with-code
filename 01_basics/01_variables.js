const accoundId = 18288                     // no change is allowed in const
let accountEmail = "shivani@gmail.com"      //use let always bcz no issue of scope 
var accountPassword = "2938"                // rarely use this bcz issue of functional scope or other scope
accountCity = "Delhi"                       // we set also default variables
let accountState;                           // agr ham sirf variable ko define krke chhod denge uski value nhi denge to vo by default output me hame undefined dega 


//************change their values allowed or not , lets check**************

// accoundId = 21   // not allowed
accountEmail= "shivsnii@gmail.com"
accountPassword = "6"
accountCity = "noida"

//console.log(accountId);   //baar baar aese krke ek ek ko peint krwane se acha h isko console.table([]) krlo sare varaibles aa jayenge usme 

console.table([accoundId, accountEmail, accountPassword, accountCity , accountState]);   // give output in tabular form

/*
Feature	           var	                       let	                                                    const

Scope		       Function-scoped	            Block-scoped ({})                                  Block-scoped ({})
Re-declaration      ✅ Allowed	               ❌ Not allowed	                                 ❌ Not allowed
Re-assignment	    ✅ Allowed	               ✅ Allowed	                                     ❌ Not allowed (value fixed)
Hoisting	        ✅ Yes (but undefined)	   ❌ Not allowed                                    ❌ Not allowed
Use Case	        Old JS (avoid now)	        Modern, changeable vars	                        Constants/fixed values*/












// Variables
//var 

// DataType varName = value;  Strongly Typed Lan
//JS -> loosely 

var age = 22; 

console.log(age);

age = "Piyush";    // we can change the value by the help of var datatype (Reasign)

console.log(age);



// Naming Convention. 
//firstname
//first_name
//FirstName
//firstName (pref) Camel Casing
//you cannot start with number or special symbol...

// var => Global         ,   means kisi bhi block k andr bnao ya bhar kyonki var globally bhi access kiya jata h 

    {
        var a = 10;
    }

    console.log(a);     // global 

// let  => Local           , same as var but only local access is allowed and it is best to choose than var  and they both are reasign the value 

   {

    var a = 10;

    console.log(a);

    a = "Shivani";                 //Reasigning

    console.log(a);             

   }

// const             
   // scope -> Local
   // Values -> Not Reassign

   const b = 30;

   console.log(b + 10);     // andr change kr skte ho bhar aap kuch change nhi kr skte






