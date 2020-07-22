const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        minlength: [2, "Name must be at least 2 characters in length."],
        maxlength: [50, "C'mon, that's not actually your name. And if it is I'm sorry. But keep it under 50 characters."]
    },
    rating: {
        type: Number,
        required: [true, "You must give a numerical rating."],
        min: [0, "It can't be THAT bad. The lowest you can go is 0 stars, but like, only if they punched you in the face."],
        max: [5, "I get that it's great, but keep it at a maximum of 5 stars please."]
    },
    review: {
        type: String,
        required: [true, "You have to leave a review, otherwise what are you even doing here?"],
        minlength: [10, "You gotta write more than that."],
        maxlength: [500, "Ok George R.R. Martin, calm down there, bud. Keep it under 500 characters."]
    }
});

module.exports = ReviewSchema;