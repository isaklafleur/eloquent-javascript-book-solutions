// ======================================================= //
/* SOLUTIONS FOR EXERCICES IN THE BOOK ELOQUENT JAVASCRIPT */
// ======================================================= //

// Looping a triangle
/* let triangle = '';
for (let i = 0; i < 7; i++) {
  triangle = triangle + '#';
  console.log(triangle);
}; */

// FizzBuzz
/* for (let i=1; i <=100; i++) {
  let result = '';
  if (i % 3 === 0) result+= 'Fizz';
  if (i % 5 === 0) result+= 'Buzz';
  if (result.length > 0) console.log(result);
    else console.log(i);
} */

// Chess Board
/* let string = '';
let line = 1;
size = 8
grid = size*size

for (let i = 1; i <= grid; i++) {
  if(i % 2 !== 0) string+= ' #';
  if(i % 2 === 0) string+= '';
  if(i % 8 === 0) {
    line % 2 === 0 ? string+= '\n' : string+= '\n '; 
    line++;
  }
}
console.log(string); */

// Minimum

/* function min(val1, val2) {
  if (val1 < val2) return val1;
    else return val2; 
}
console.log(min(1,2)); */

// Recursion
/* function isEven(n) {
  return Number.isInteger(n/2);
}

function isEven(n) {
  if (n === 0)
    return true;
  else if (n === 1)
    return false;
  else if (n<0)
    return isEven(-n);
  else
    return isEven(n-2);
}

console.log(isEven(-1));
*/

// Bean counting
/* function countBs(someString) {
  let counter = 0;
  for (let i = 0; i < someString.length; i++) {
    if (someString[i] === 'B') counter++ 
  }
    return counter;
};

console.log(countBs('BdsdsdBsdsdsdeweB'));

function countChar(someString, chartToFind) {
  let counter = 0;
  for (let i = 0; i < someString.length; i++) {
    if (someString[i] === chartToFind) counter++;
  }
  return counter;
}

console.log(countChar('sdsdsäÄsdsdäää', 'ä')); */

// The sum of a range
/* function range(start, end) { // v1
  let rangeArray = [];
  for (let i = start; i <= end; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
}
console.log(range(1,5));

function rangeStep(start, end, step) { // v2
  let rangeArray = [];
  if(step > 0) {
    for (let i = start; i <= end; i+=step) {
      rangeArray.push(i);
    }
  } else {
    for (let i = start; i >= end; i+=step) {
      rangeArray.push(i);
    }
  }
  return rangeArray;
}
console.log(rangeStep(10,1,-2));


function sum(array) {
  let sum = 0;
  array.forEach(element => sum+=element);
  return sum;
}
console.log(sum(rangeStep(1,10, 2))); */

// Reversing an array
const test = ['A','B','C'];

function reverseArray(array) {
  let reversedArray = [];
  for (var i = array.length-1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}
console.log(reverseArray(test));
