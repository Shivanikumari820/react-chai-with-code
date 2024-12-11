

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "shivani"
};

// Destructuring with aliasing    ===> extracts the courseInstructor property from the course object and assigns its value to a new variable named instructor. This process is known as aliasing in destructuring
//course.courseInstructor 
const { courseInstructor: instructor } = course;

// console.log(courseInstructor);

console.log(instructor); // Output: shivani


//Function Parameter Destructuring with Default Values-->
const navbar = ({ company } = {}) => {
    console.log(company);
};

// Invoking the function
navbar({ company: "shivani" }); // Output: shivani


/*
 What is JSON 
JSON (JavaScript Object Notation) is a lightweight data format for storing and exchanging data. It is easy for humans to read and write and easy for machines to parse and generate.

Syntax:-
{
    "key": "value"
}


Example:-
{
    "name": "Shivani",
    "age": 25,
    "isStudent": true,
    "skills": ["JavaScript", "Python", "HTML"],
    "address": {
        "city": "Delhi",
        "zipCode": 110001
    }
}

*/