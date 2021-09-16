/* 5.1. Flattening */

// Use the reduce method in combination with the concat method to “flatten” an 
// array of arrays into a single array that has all the elements of the 
// original arrays.

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((a, b) => a.concat(b)));
// → [1, 2, 3, 4, 5, 6]

/* 5.2. Your Own Loop */

// Write a higher-order function loop that provides something like a for loop 
// statement. It takes a value, a test function, an update function, and a body
// function. Each iteration, it first runs the test function on the current 
// loop value and stops if that returns false. Then it calls the body function,
// giving it the current value. Finally, it calls the update function to create
// a new value and starts from the beginning.

//When defining the function, you can use a regular loop to do the actual
// looping.
let loop = (value, test, update, body) => {
    for (let v = value; test(v); v = update(v)) { body(v) }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

/* 5.3. Everything */

// Analogous to the some method, arrays also have an every method. This one 
// returns true when the given function returns true for every element in the 
// array. In a way, some is a version of the || operator that acts on arrays, 
// and every is like the && operator.

// Implement every as a function that takes an array and a predicate function 
// as parameters. Write two versions, one using a loop and one using the some 
// method.
function every(array, test) {
    for (let element of array) {
        if (!test(element)) return false
    }
    return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

function everySome(array, test) {
    return !array.some(element => !test(element));
}

console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true

/* 5.4. Dominant Writing Direction */

// Write a function that computes the dominant writing direction in a string of
// text. Remember that each script object has a direction property that can be 
// "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

// The dominant direction is the direction of a majority of the characters that 
// have a script associated with them. The characterScript and countBy 
// functions defined earlier in the chapter are probably useful here.
function dominantDirection(text) {
    /* Note: this function depends on helper functions 
    defined in the book and data from its website */

    /* Creates a map from script direction to char count 
    for each script in the input text */
    let directionCounts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({name}) => name != "none");

    /* Determines which direction in the above 
    map has the highest char count */
    return directionCounts.reduce((a, b) => {
        return a.count > b.count ? a : b;
    }, 0).name;
}
  
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
