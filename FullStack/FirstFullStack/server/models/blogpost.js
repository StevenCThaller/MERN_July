const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You can't have a blog post without a title"]
    },
    text: {
        type: String,
        required: [true, "What's a blog post without text?"]
    },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() }
});


module.exports = BlogPostSchema;

