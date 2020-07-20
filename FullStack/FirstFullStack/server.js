// Imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

app.use(
    cors(),
    express.json(),
    express.urlencoded({extended:true})
);


mongoose.connect('mongodb://localhost/full_db', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB connection established"))
    .catch(err => console.log("Failed to connect to the database"));

const UserSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Name is required."],
        minlength: [2, "Name must be at least 2 characters."],
        maxlength: [100, "Server space isn't free, chump!"]
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        minlength: [7, "Email must be at least 7 characters."],
        validate: {
            validator: function(v) {
                let re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
                return re.test(v)
            },
            message: "Invalid email address."
        }
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [8, "Password must be at least 8 characters in length."]
    }
}, { timestamps: true });



const User = mongoose.model("User", UserSchema);


// Read - All -> get
app.get("/api/users", (req,res) =>{
    User.find({})
        .then(data => res.json({ message: "success", results: data }))
        .catch(err => res.json({ message: "error", results: err }));
});

// Read - One -> get
app.get("/api/users/:id", (req,res) => {
    User.findOne({ _id: req.params.id })
        .then(data => res.json({ message: "success", results: data }))
        .catch(err => res.json({ message: "error", results: err }));
})

// Create -> post
app.post("/api/users", (req,res) => {
    User.create(req.body)
        .then(data => res.json({ message: "success", results: data }))
        .catch(err => res.json({ message: "error", results: err }))
})

// Update -> put
app.put("/api/users/:id", (req,res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true })
        .then(data => res.json({ message: "success", results: data }))
        .catch(err => res.json({ message: "error", results: err }))
})

// Delete -> delete
app.delete("/api/users/:id", (req,res) => {
    User.findOneAndDelete({ _id: req.params.id })
        .then(data => res.json({ message: "success", results: data }))
        .catch(err => res.json({ message: "error", results: err }))
})

app.listen(8000, () => console.log("Listening on port 8000"));