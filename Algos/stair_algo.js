// CHALLENGE ALGO TIME!!!!!

// There are n number of stairs. A person at the bottom of the stairs wants to 
// reach the top, and can climb either 1, 2, or 3 stairs at a time. 

// Write an algorithm that will find the number of ways the person can reach the top.

// HINT: RECURSION
function stairs(num){
    if(num < 0) {
        return 0;
    }
    if(num == 0) {
        return 1;
    }
    if(num == 1 || num == 2){
        return num;
    }

    return stairs(num - 1) + stairs(num - 2) + stairs(num - 3);
}

// Super fancy memoization solution
function climbStairs(n, count=0, memo=[]) {
    if(count > n) {
        return 0;
    }
    if(count === n){
        return 1;
    }
    if(memo[count] > 0) {
        return memo[count];
    }

    memo[count] = climbStairs(n, count+1, memo) + climbStairs(n, count+2, memo) + climbStairs(n, count+3, memo);
    return memo[count];
}
