

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
