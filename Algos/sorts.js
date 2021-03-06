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
    // First we want to loop through the entire array
    for(let i = 1; i < arr.length; i++) {
        // Starting at i, we want to swap the element to the left until it's in place.
        let index = i;
        // Until the element is in place or at the beginning of the array:
        while(index > 0 && arr[index] < arr[index-1]) {
            // Swap the element with the one to its left
            let temp = arr[index];
            arr[index] = arr[index-1];
            arr[index-1] = temp;
            // And decrement index so we can do it again!
            index--;
        }
    }
    return arr;
}

// Write a function that will merge 2 sorted arrays
function mergeArrays(arr1, arr2) {
    // We basically need 2 iterators: one for arr1 and one for arr2
    let i = 0; 
    let j = 0;
    // And a new empty array for us to squish everything into.
    let newArr = [];

    // This first while loop will run until either i or j reach the end of their
    // respective arrays
    while(i < arr1.length && j < arr2.length) {
        // If the element in array 1 at index i is less than the element
        // in array 2 at index j, push it into the new array and increment i
        if(arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        }
        // Otherwise, push the element in array 2 at index j into the new array
        // and increment j
        else {
            newArr.push(arr2[j]);
            j++;
        }
    }

    // Now it's possible that we finished iterating through 1 array,
    // and haven't looked at any of the elements in the other,
    // so these while loops will make sure the rest of the elements get put in there.
    while(i < arr1.length) {
        newArr.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
    }
    // And finally, return the new array!
    return newArr;
}

// Write a function that will perform merge sort.
function mergeSort(arr) {
    // If the array has a length of 1, it's obviously already sorted.
    if(arr.length == 1)
        return arr;
    
    // otherwise, let's go ahead and split the array in 2: left and right
    let left = arr.slice(0, Math.floor(arr.length/2));
    let right = arr.slice(Math.floor(arr.length/2), arr.length);

    // Now, we want to make our recursive calls for both the left side. This
    // is the divide part, constantly splitting the array in half until it's 1 element long
    left = mergeSort(left);
    right = mergeSort(right);
    
    // Now for the conquer. We'll use that merge function we wrote, and merge what is
    // returned as the left and right side of our recursive calls.
    return mergeArrays(left, right);
}



// Write an algorithm for the partition portion of Quick Sort

// It should take an array, and potentially a left index, and a right index. But left and right will
// have default values of 0 and the last index of the array. In return, it should
// rearrange so that the elements greater than (or equal to) the element at your initial pivot index
// (for simplicity's sake let's just choose the rightmost element) are to its right,
// and those less than that element are to its left.

// It should return the pivot element's new index
function partition(arr, left=0, right=arr.length-1) {
    if(left >= right) {
        return left;
    }
    // This partition method functions with the rightmost element being
    // our pivot element.

    // Let's keep track of our new pivot index
    let nP = left;
    

    // BIG PICTURE FOR THIS FOR LOOP: We want to shift things around
    // so that when we move our pivot element into its place, everything to the left
    // is less than it, and everything to the right is greater than it.
    
    // Now, we want to loop from the left-most element
    // to the element before our pivot element
    for(let i = left; i < right; i++) {
        // If the element we're looking at is less than our pivot
        if(arr[i] < arr[right]){
            // We want to swap the current element with the element at our
            // new Pivot index
            let temp = arr[i];
            arr[i] = arr[nP];
            arr[nP] = temp;
            // and increment the new pivot index by 1.
            nP++;
        }
    }


    // Finally, to actually move our pivot element into the place it belongs, we'll swap our pivot element
    // with the element at our new pivot index.
    let temp = arr[nP];
    arr[nP] = arr[right];
    arr[right] = temp;

    // And return the new pivot index.
    return nP;
}


// Write an algorithm that performs quick sort. It will take an array, and potentially a left
// index and right index. The left and right will have a default of 0 and the last index of the
// array.

// HINT: This will consist of a break case, 2 recursive calls, and a call
// to the partition function (not necessarily in that order!!!!);
function quickSort(arr, left=0, right=arr.length-1){
    if(left >= right)
        return arr;
        
    let i = partition(arr, left, right);
    // Run quicksort for the portion of the array to the left of our partition index
    quickSort(arr, left, i-1);
    // Run quicksort for the portion of the array to the right of our partition index
    return quickSort(arr, i+1, right);
}


let arr = [10,2,28,23,12,8,35];

console.log(quickSort(arr));

