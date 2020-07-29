// Given an array of unsorted integers and a number, k, find the k most frequent elements in the array.

// EXAMPLE: kMostFreq([4,2,9,8,2,9,2,1,5], 2) would return [2,9] since 2 is
// found 3 times, 9 two times, and all other elements just once.
function kMostFreq(arr, k){
    let dict = {};
    for(let i = 0; i < arr.length; i++){
        if(!dict[arr[i]]){
            dict[arr[i]] = 1;
        } else {
            dict[arr[i]]++;
        }
    }

    let newArr = [];
    for(let key in dict){
        newArr.push([[key], dict[key]]);
    }

    newArr.sort((a,b) => a[1] > b[1]);

    let toReturn = [];
    for(let i = 0; i < k; i++){
        toReturn.push(parseInt(newArr[i][0]));
    }

    return toReturn;
}

console.log(kMostFreq([1,4,3,2,3,5,1,1,2], 2));