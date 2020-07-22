const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/food_truck', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB Connection established."))
    .catch(err => console.log("No.", err))