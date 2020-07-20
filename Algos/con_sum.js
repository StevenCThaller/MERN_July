// Write a function that takes a number, and prints the different ways
// you can represent the number as a sum of 2 or more consecutive numbers.

// Example: 
// 15 can be represented as:
// 1+2+3+4+5
// 4+5+6
// 7+8
function conSum(num){
    for(let i = 1; i < num/2; i++) {
        let pStr = i;
        let sum = i;
        let j = i+1;
        while(sum < num){
            sum += j;
            pStr += ` + ${j}`;
            j++;
        }
        if(sum == num) {
            console.log(pStr);
        }        
    }
}


conSum(9);

// function conSumAly(num){
//     let start = 1;
//     let end = 1;
//     let sum = 1;

//     while(start <= num/2){
//         if(sum < num) {
//             end++;
//             sum += end;
//         }
//         else if(sum > num) {
//             start++; 
//             sum = start;
//             end = start;
//         }
//         else{
//             let string = `${start} `;
//             for(let i = start+1; i <= end; i++) {
//                 string += `+ ${i} `
//             }
//             console.log(string);
//             start++;
//             end = start;
//             sum = start;
//         }
//         // console.log(`Sum: ${sum}\nStart: ${start}\nEnd: ${end}`)
//     }
// }

// conSumAly(15);