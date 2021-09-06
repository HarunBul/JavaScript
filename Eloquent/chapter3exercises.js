/* 3.1. Minimum */

// Write a function min that takes two arguments and returns their minimum.
let min = (a, b) => {
    return a < b ? a : b;
}
  
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

/* 3.2. Recursion */

// Define a recursive function isEven that accepts a positive, whole number and
// returns a Boolean indicating whether or not it is even.
let isEven = n => {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 1) return isEven(-n);
    else return isEven(n-2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

/* 3.3. Bean counting */

// Write a function countBs that takes a string as its only argument and
// returns a number that indicates how many uppercase “B” characters there are
// in the string.
function countBs(str) {
    // let count = 0;
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] == "B") count += 1;
    // }
    // return count;
    return countChar(str, "B");
}


// Next, write a function called countChar that behaves like countBs, except it
// takes a second argument that indicates the character that is to be counted.
// Rewrite countBs to make use of this new function.

let countChar = function(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) count += 1;
    }
    return count;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
