const express = require('express');
const faker = require('faker');


class FakeThing{
    constructor(num){
        this.id = num
        this.fakeName = faker.name.firstName() + " " + faker.name.lastName();
        this.fakeAge = faker.random.number(100);
        this.fakeHeight = faker.random.number(8);
    }
}



const app = express();
const port = 8000;

// app.get("/api/welcome", (req,res) => {
//     res.json({ message: "Welcome, loser!" });
// });

// app.get("/api/hello/:name", (req,res) => {
//     let variablefromroute = req.params.name;

//     res.json({ message: `Sup, ${variablefromroute}`});
// })

app.get("/api/sucker/all", (req,res) => {
    let people = [];
    for(let i = 0; i < 10; i++){
        people.push(new FakeThing(i));
    }
    res.json({ message: "success", results: people })
});

app.get("/api/sucker/:id", (req,res) => {

    res.json({ message: "success", results: new FakeThing(req.params.id) });
});


app.listen(port, () => console.log(`Server running on port ${port}`));