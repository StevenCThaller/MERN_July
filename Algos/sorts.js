// Write a function to perform bubble sort.

// The basic idea for bubble sort is that you want to iterate through
// the entire array, looking at 2 elements, and swapping them if the left
// one is greater than the right one. Basically, we're having each element
// "bubble up" until the array is sorted.


// [2, 5, 9, 10, 16, 18, 22]

function bubbleSort(arr) {
    // let sorted = false;
    // while(!sorted){
    //     sorted = true;
    //     for(let i = 1; i < arr.length; i++) {
    //         if(arr[i-1] > arr[i]){
    //             let temp = arr[i-1];
    //             arr[i-1] = arr[i];
    //             arr[i] = temp;
    //             sorted = false;
    //         }
    //     }
    // }
    let sorted;
    do {
        sorted = true;
        for(let i = 1; i < arr.length; i++) {
            if(arr[i-1] > arr[i]){
                let temp = arr[i-1];
                arr[i-1] = arr[i];
                arr[i] = temp;
                sorted = false;
            }
        }
    }
    while(!sorted)


    return arr;
}


// Write a function to perform selection sort:
// arr[] = [ 64, 25, 12, 22, 11 ]

// Find the minimum element in arr[0...4]
// and place it at beginning
// 11 25 12 22 64

// Find the minimum element in arr[1...4]
// and place it at beginning of arr[1...4]
// 11 12 25 22 64

// Find the minimum element in arr[2...4]
// and place it at beginning of arr[2...4]
// 11 12 22 25 64

// Find the minimum element in arr[3...4]
// and place it at beginning of arr[3...4]
// 11 12 22 25 64 

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let min = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}


// Write a function that performs an insertion sort.
// The way insertion sort works is you loop through each index i 
// and at each i, we should have arr[0] through arr[i-1] be sorted.
// Then at i, we "insert" that element wherever it belongs in [0, ..., i-1].

function insertionSort(arr) {

}