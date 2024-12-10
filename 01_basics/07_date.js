      //DATES--------->

//Current Date and Time:

let myDate = new Date();
console.log(myDate.toString());         // Output: "Tue Dec 10 2024 11:45:30 GMT+0530 (India Standard Time)"Full date and time as a string
console.log(myDate.toDateString());     // Output: "Tue Dec 10 2024"  Date as a readable string (e.g., "Mon Jan 23 2023")
console.log(myDate.toLocaleString());   // Output: "12/10/2024, 11:45:30 AM"  Date and time formatted based on locale
console.log(typeof myDate);             // Outputs: "object" (Date is an object)


// Create Custom Dates:

let myCreatedDate = new Date(2023, 0, 23); // Year: 2023, Month: January (0-indexed), Day: 23
console.log(myCreatedDate.toDateString()); // "Mon Jan 23 2023"

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3); // Adds hours (5) and minutes (3)
console.log(myCreatedDate1.toLocaleString());     // "1/23/2023, 5:03:00 AM"

let myCreatedDate2 = new Date("2023-01-23"); // Using ISO format
console.log(myCreatedDate2.toDateString());  // "Mon Jan 23 2023"

// Working with Timestamps  ------->>>

// Get Current Timestamp

let myTimeStamp = Date.now();           // Current timestamp in milliseconds since Jan 1, 1970
console.log(myTimeStamp);               // Example: 1674441600000
console.log(myCreatedDate.getTime());   // Timestamp for `myCreatedDate` in milliseconds
console.log(Math.floor(Date.now() / 1000)); // Current timestamp in seconds



// Extracting Components of a Date ------------> 
// Get Specific Parts of the Date:

let newDate = new Date();
console.log(newDate.getHours());        // Output: 11 (current hour in 24-hour format)
console.log(newDate.getDay());          // Output: 2 (Tuesday; 0 = Sunday, 6 = Saturday)
console.log(newDate.getMonth());        // Output: 11 (December is the 12th month, but getMonth() is 0-indexed)


console.log(newDate.toLocaleString('default',        // Outputs full weekday name, e.g., "Monday"
    { weekday: "long"}
)); 

//Template Literals---> 

// `${newDate.getDay()} and the time `

let newDate1 = new Date();
let fullDayName = newDate.toLocaleString('default', { weekday: 'long' });
let currentTime = newDate.toLocaleTimeString();

console.log(`${fullDayName} and the time is ${currentTime}`);    // Example Output: "Tuesday and the time is 11:45:30 AM"

