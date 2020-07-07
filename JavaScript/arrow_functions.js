// function yellAtMe(name){
//     console.log(`RAH RAH RAH LOUD NOISES! ${name}`)
// }


// const yellAtMe = name => console.log(`RAH RAH RAH LOUD NOISES! ${name}`);

// // function multiply(x, y) {
// //     return x * y;
// // }

// const multiply = (x, y) => x * y;

// console.log(multiply(4,3));


class Slapper {
    constructor(name){
        this.name = name;
    }

    slapMultipleTargets = targets => {
        targets.forEach(target => {
            console.log(`Hey ${target}! You're about to be slapped!`);
            console.log(this.slapTarget(target));
        });
        
    }
    
    slapTarget = target => `${this.name} slapped ${target} in the face!`;
}

let slappy = new Slapper("Slap McSlappingtons");

let needToBeSlapped = ["Trump", "Biden", "Government"];

slappy.slapMultipleTargets(needToBeSlapped);
var x = null;
console.log(x);

let sayHi = "General Kenobi";

sayHi == "Cody" ? console.log("Hi Cody") :  sayHi == "Joe" ? console.log("Goodbye") : sayHi == "General Kenobi" ? console.log("Hello there") : console.log("No");


