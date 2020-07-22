const mongoose = require('mongoose');
const ReviewSchema = require('./review');

const TruckSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You can't have a food truck without a name."],
        minlength: [5, "Truck name must be at least 5 characters long."],
        maxlength: [50, "That's a mouthful, let your food do that. Keep the name under 50 characters."]
    },
    style: {
        type: String,
        required: [true, "You must have a cuisine style."],
        minlength: [3, "Cuisine style must be at least 3 characters in length."],
        maxlength: [75, "Stop. 25 characters or less."]
    },
    description: {
        type: String,
        required: [true, "You must have a description so customers know what they're getting into."],
        minlength: [10, "That's not enough, please write at least 10 characters. I wrote more in this error message, put in some effort, buddy."],
        maxlength: [1000, "Ok, I know I said to put in some effort, but dial it back a knotch. Keep it under 100 characters."]
    },
    reviews: [ReviewSchema]
}, { timestamps: true });

const Truck = new mongoose.model("Truck", TruckSchema);

module.exports = Truck;