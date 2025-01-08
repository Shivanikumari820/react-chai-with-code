// First Code: Using filter() Method

const myNums = [1,2,3,4,5,6,7]

const newNumss = myNums.filter( (num) => num > 4)    // The callback function (num) => num > 4 checks each number (num) in the array:
console.log(newNumss);                   // [ 5, 6, 7 ]        




// Second Code: Using forEach() Method  , less efficient then filter

const newNums = []

myNums.forEach((num) => {
    if(num > 4) {
        newNums.push(num)                      // [ 5, 6, 7 ]  
    }
})

console.log(newNums);


// More work of filter------------------------------------------->>
const booksDatabase = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        year: 1960,
        rating: 4.9
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        year: 1949,
        rating: 4.8
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        year: 1925,
        rating: 4.7
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        genre: "Adventure",
        year: 1851,
        rating: 4.2
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        year: 1813,
        rating: 4.6
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        year: 1951,
        rating: 4.1
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        year: 1937,
        rating: 4.8
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        year: 1997,
        rating: 4.9
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        year: 1954,
        rating: 4.7
    }
];


const fantasyBooks = booksDatabase.filter(book => book.genre === "Fantasy");  // jha jha fantasy h genre vo vo return kro output me 
console.log(fantasyBooks);

const tolkienBooks = booksDatabase.filter(book => book.author === "J.R.R. Tolkien");   //  Find books by a specific author (e.g., Tolkien):
console.log(tolkienBooks);

const book1984 = booksDatabase.find(book =>  { return book.title === "1984" })//Find a book by title (e.g., "1984"):  or to or yha hamne scope use kiya na {} to return keyword use hoga ok
 console.log(book1984);  
 
 const bookTitles = booksDatabase.map(book => book.title);   // print only book title
console.log(bookTitles);

const hasJaneAustenBook = booksDatabase.some(book => book.author === "Jane Austen");//Check if a book by a specific author exists (e.g., "Jane Austen"):
console.log(hasJaneAustenBook);  // Output: true





/* NOTE:

Use forEach() when you want to perform an action for each element of the array (like logging, or modifying external variables).
Use filter() when you want to create a new array with elements that meet certain criteria, without modifying the original array  */