var jimjam = ["Iron Man", "Captain America", "Black Widow", "Thor"];

// for(var x = 0; x < 5; x++) {
//     console.log(x);
// }

// avengersAssemble(jimjam);



// console.log("After the loop: ");
// console.log(x);

function avengersAssemble(heroes) {
    var name = "Bill";
    for(var i = 0; i < heroes.length; i++) {
        name = heroes[i];
        console.log(`${name} reporting for duty!`);
        for(var j = 0; j < name.length; j++) {
            console.log(`${name[j]}`);
        }
        console.log("What's that spell?!");
        console.log(`${name}!`);
    }
    console.log(j);

    // console.log(`The last hero to report is ${name} and they were number ${i}`);
}

function letAvengersAssemble(heroes){   
    console.log(name);

    let name = "Bill";
    for(let i = 0; i < heroes.length; i++) {
        name = heroes[i];
        console.log(`${name} reporting for duty!`);

        for(let j = 0; j < name.length; j++) {
            console.log(`${name[j]}`);
        }
        console.log("What's that spell?!");
        console.log(`${name}!`);
    }
    console.log(j);
}

