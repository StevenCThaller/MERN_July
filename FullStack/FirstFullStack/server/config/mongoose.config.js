const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/full_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB connection established"))
    .catch(err => console.log("Failed to connect to the database"));