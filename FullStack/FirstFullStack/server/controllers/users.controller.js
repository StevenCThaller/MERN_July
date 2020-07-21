const User = require('../models/user');


// module.exports.allUsers = (req,res) =>{
//     User.find({})
//         .then(allUsers => res.json({ message: "success", results: allUsers }))
//         .catch(err => res.json({ message: "error", results: err }));
// }

// module.exports.oneUser = (req,res) => {
//     User.findOne({ _id: req.params.id })
//         .then(user => res.json({ message: "success", results: user }))
//         .catch(err => res.json({ message: "error", results: err }));
// }

// module.exports.createUser = (req,res) => {
//     User.create(req.body)
//         .then(newUser => res.json({ message: "success", results: newUser }))
//         .catch(err => res.json({ message: "error", results: err }))
// }

// module.exports.updateUser = (req,res) => {
//     User.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true })
//         .then(updatedUser => res.json({ message: "success", results: updatedUser }))
//         .catch(err => res.json({ message: "error", results: err }))
// }

// module.exports.deleteUser = (req,res) => {
//     User.findOneAndDelete({ _id: req.params.id })
//         .then(deletedUser => res.json({ message: "success", results: deletedUser }))
//         .catch(err => res.json({ message: "error", results: err }))
// }

module.exports = {
    allUsers: (req,res) =>{
        User.find({})
            .then(allUsers => res.json({ message: "success", results: allUsers }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    oneUser: (req,res) => {
        User.findOne({ _id: req.params.id })
            .then(user => res.json({ message: "success", results: user }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    createUser: (req,res) => {
        console.log(req.body);
        User.create(req.body)
            .then(newUser => res.json({ message: "success", results: newUser }))
            .catch(err => res.json({ message: "error", results: err }))
    },
    updateUser: (req,res) => {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true })
            .then(updatedUser => res.json({ message: "success", results: updatedUser }))
            .catch(err => res.json({ message: "error", results: err }))
    },
    deleteUser: (req,res) => {
        User.findOneAndDelete({ _id: req.params.id })
            .then(deletedUser => res.json({ message: "success", results: deletedUser }))
            .catch(err => res.json({ message: "error", results: err }))
    },
    createBlogPost: (req,res) => {
        User.findOneAndUpdate({ _id: req.params.id }, { $addToSet: { blogPosts: req.body }}, { runValidators: true, new: true })
            .then(userWithNewPost => res.json({ message: "success", results: userWithNewPost }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    deleteBlogPost: (req,res) => {
        console.log(`UID: ${req.params.uid}`)
        console.log(`PID: ${req.params.pid}`)
        User.findOneAndUpdate({ _id: req.params.uid }, { $pull: { blogPosts: { _id: req.params.pid } } }, { new: true })
            .then(userWithoutPost => res.json({ message: "success", results: userWithoutPost}))
            .catch(err => res.json({ message: "error", results: err }));
    },
    findBlogPost: (req,res) => {
        User.find({ "blogPosts._id": req.params.pid })
        .then(data => {
            res.json(data);
        })
        .catch(err => res.json(err));
    }
}
