// ************* Imports ***************
const express = require('express');
const mongoose = require('mongoose');
// *************************************

const app = express();

// These are vital to use being able to receive post requests and 
// to actually use the data from whatever is being submitted

// It is necessary so we can actually use our database
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/doggo_base', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB connection established."))
    .catch(err => console.log("Connection NOT established. Did you remember to actually start your mongo server?", err));

// This is setting up the model. Basically, these are the
// rules for what goes into our database
const DogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
    color: String,
    gooddoggo: Boolean
}, { timestamps: true });

// This actually generates the collection in our database. Basically,
// this actually generates the info in our database
const Dog = mongoose.model("Dog", DogSchema);

app.get("/api/doggo/all", (req,res) =>{
    Dog.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => res.json(err));
});

app.post("/api/doggo/create", (req,res)=>{
    Dog.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
});



app.listen(8000, () => {
    console.log("Listening on port 8000");
})