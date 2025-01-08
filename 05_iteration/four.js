const myObject = {
    js : 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}

// for...in Loop:   for...in is specifically designed to iterate over an object's enumerable properties (its keys).  Unlike for...of: Iterates over the values of an iterable (e.g., arrays, strings, Maps).

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}     

/*
output:
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple*/

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);        // output: 0 1 2 3 4  //key in this loop will represent the index of each element in the array, not the value
} 
