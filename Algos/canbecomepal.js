// Write a function that takes a string,
// and returns whether or not you can make a palindrome with that string.

// "cat coat" would return true because it can be rearranged to taco cat
// "go hang a lasagna im a salami hog" would return true because it can be rearranged to "go hang a salami im a lasagna hog"

// "taco tony" would return false, because you canot make that a palindrome no matter what

function canBecomePalindrome(string){
    let count = {};
    let odds = 0;
    let len = 0;

    for(let i = 0; i < string.length; i++){
        if(string[i] != " "){
            if(!count[string[i]]){
                count[string[i]] = 1;
            } else if(count[string[i]]) {
                count[string[i]]++;
            }
            len++;
        }
    }

    for(let kv in count){
        if(count[kv]%2 != 0){
            odds++;
        }

        // if(odds > 0 && len%2 == 0){
        //     return false;
        // }
        // else if(odds > 1 && len%2 == 1){
        //     return false;
        // }
    }

    if(odds > 1){
        return false;
    }

    return true;
}


console.log(canBecomePalindrome("the miami marlins are already screwing things up and had to cancel a game because there is a covid outbreak")); // abcdeedcba