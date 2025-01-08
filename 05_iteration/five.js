// for.. each loop

const coding = ["js", "ruby", "cpp", "java", "py"];

// Iterating over the array using forEach
coding.forEach(function(val) {
    // console.log(val);  
});

//arrow function ------------->> 
// coding.forEach( (item) =>{
//     // console.log(item);
// })

//
coding.forEach( (item, index, arr) =>{   // coding.forEach( (item, index, arr) =>{
    console.log(item, index, arr);
})



// forEach() doesnot return a value
const values = coding.forEach( (item) =>{
    // console.log(item);
})
console.log(values);    // output : undefined




// object as array  and then using forEach loop
const myCoding = [
    // {...
    // }, 
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "pyhton"
    },
    {
        languageName: "cpp",
        languageFileName: "cpp"
    },
]

myCoding.forEach( (item) => {
    // console.log(item);
    console.log((item).languageFileName);    // java python cpp


})



/*
Summary:
forEach() iterates over each element of the array.
The function you provide to forEach() is executed for every element.
The value of each element is passed as val to the function, and in this case, you're logging it to the console.


Important Notes about forEach():
Does not return a value: The forEach() method always returns undefined. It is not used to modify the array or create a new one, unlike methods such as map().

Cannot break or return early: You cannot use break or continue inside a forEach() loop. If you need to stop the loop early, you might consider using a traditional for loop or methods like some() or every(). */
 






