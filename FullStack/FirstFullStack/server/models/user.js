const mongoose = require('mongoose');
const BlogPostSchema = require('./blogpost');

// You can put this in a separate file and import it,
// or do it all in the same file
// const BlogPostSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: [true, "You can't have a blog post without a title"]
//     },
//     text: {
//         type: String,
//         required: [true, "What's a blog post without text?"]
//     }
// }, { timestamps: true })

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
    },
    blogPosts: [BlogPostSchema]
    // Alternatively, you can just define the schema of the nested
    // document within this schema
    // blogPosts:[
    //     { 
    //         title: { type: String, required: true },
    //         text: { type: String, required: true }
    //     }
    // ]
}, { timestamps: true });



const User = mongoose.model("User", UserSchema);

module.exports = User;