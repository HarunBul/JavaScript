/* 4.1. The Sum of a Range */

// Write a range function that takes two arguments, start and end, and returns 
// an array containing all the numbers from start up to (and including) end.
let range = (start, end, step) => {
    if (step == undefined) {step = 1}
    /* Note: can also define step param as ternary operator in func def */
    let output = [];

    /* Note: for loops can be optionally condensed to a single line each */
    if (start < end) {
        for (let i = start; i <= end; i += step) {
            output.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            output.push(i);
        }
    }
    return output;
}

// Next, write a sum function that takes an array of numbers and returns the 
// sum of these numbers.
let sum = (sequence) => {
    let output = 0;
    for (let i of sequence) { output += i }
    return output;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

/* 4.2. Reversing an Array */

// Write a function, reverseArray, that takes an array as argument and produces
// a new array that has the same elements in the inverse order.
function reverseArray(array) {
    let output = [];
    for (let element of array) {
        output.unshift(element);
    }
    return output;
}

// Write a function, reverseArrayInPlace, that modifies the array given as 
// argument by reversing its elements.
let reverseArrayInPlace = function(array) {
    let temp;
    for (let i = 0, j = array.length - 1; i < Math.ceil(array.length / 2); i++, j--) {
        temp = array[i];
      	array[i] = array[j];
      	array[j] = temp;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

/* 4.3. A List */

// Write a function arrayToList that builds up a (Linked) list structure like 
// the one shown when given [1, 2, 3] as argument.
// ...

// Write a listToArray function that produces an array from a list.
// ...

// Then add a helper function prepend, which takes an element and a list and 
// creates a new list that adds the element to the front of the input list...
// ...

// ... and nth, which takes a list and a number and returns the element at the 
// given position in the list (with zero referring to the first element) or 
// undefined when there is no such element.
// ...

// If you haven’t already, also write a recursive version of nth.
// ...

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

/* 4.4. Deep Comparison */

// Write a function arrayToList that builds up a (Linked) list structure like 
// the one shown when given [1, 2, 3] as argument.
// ...

// Write a function deepEqual that takes two values and returns true only if 
// they are the same value or are objects with the same properties, where the 
// values of the properties are equal when compared with a recursive call to 
// deepEqual.
// ...

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
