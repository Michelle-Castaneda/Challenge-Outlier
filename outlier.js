// Find the Outlier
// Difficulty
// Medium

// Concepts
// Math, Logic, Conditionals


// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
//The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
//Write a function that takes the array as an argument and returns this “outlier” N.

// Examples:

// [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)

let evenNum = 0;
let oddNum = 0;


function outlier (arr) {
    let evenArr= 0;
    let oddArr = 0;

    for(let i=0; i < arr.length;i++) {
        if(arr[i] % 2 === 0) {
            evenArr += 1
            evenNum = arr[i]
        }else {
            oddArr += 1
            oddNum = arr[i]
        }
    }
        if(evenArr > oddArr) {
                 return oddNum
             }else {
               return evenNum
             }

  }

  console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]))