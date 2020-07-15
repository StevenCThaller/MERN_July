// Write a function that takes 2 sorted arrays and finds the intersection of those arrays.
// The intersection is just a fancy term for the elements that are in both arrays.

// EXAMPLE:
// arr1 = [1,3,4,6]
// arr2 = [3,5,6,7]
// return = [3,6]

function intersection(arr1, arr2) {
    let dict= {};
    let toReturn = [];
    for(let i = 0; i < arr1.length; i++) {
        dict[arr1[i]] = true;
    }

    for(let i = 0; i < arr2.length; i++) {
        if(dict[arr2[i]] == true){
            toReturn.push(arr2[i]);
            dict[arr2[i]] = false;
        }
    }

    return toReturn;
}

// Write a function that finds the union of 2 arrays.
// The union of 2 arrays is ALL elements that exist in the arrays, 
// with no duplicates. Think the total set of data in a venn diagram.

// EXAMPLE: 
// The union of:
// [1,3,3,4,7,9]
// [3,5,8,8,9,11]
// would be: [1,3,4,5,7,8,9,11]

function union(arr1, arr2) {
    let dict = {};
    let union = [];
    for(let i = 0; i < arr1.length; i++) {
        if(!dict[arr1[i]]){
            dict[arr1[i]] = true;
            union.push(arr1[i]);
        }
    }

    for(let i = 0; i < arr2.length; i++) {
        if(!dict[arr2[i]]){
            dict[arr2[i]] = true;
            union.push(arr2[i]);
        }
    }

    return union;
}


// Write a function that calculates the difference of
// diagonals of a 2D array.

// EXAMPLE:
// let arr = [[8,2,6],
//            [4,1,3],
//            [5,9,7]]

// Diagonal 1 sum: 8 + 1 + 7 = 16
// Diagonal 2 sum: 6 + 1 + 5 = 12

// Difference => |16-12| = 4
function diagDiff(arr){
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < arr.length; i++){
        sum1 += arr[i][i];
    }

    for(let i = arr.length-1; i >= 0; i--){
        sum2 += arr[arr.length-1-i][i];
    }

    return Math.abs(sum1-sum2);
}










/* Dictionaries are cool 
let dict = {};
let arr = [1,3,3,5,6,7,7,9];
for(let i = 0; i < arr.length; i++) {
    if(!dict[arr[i]]){
        dict[arr[i]] = 1;
    }
    else if(dict[arr[i]]){
        dict[arr[i]]++;
    }
}

console.log(dict);

*/