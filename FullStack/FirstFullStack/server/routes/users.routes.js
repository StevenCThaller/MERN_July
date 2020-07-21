const userC = require('../controllers/users.controller');

module.exports = function(app) {
    // Read - All -> get
    app.get("/api/users", userC.allUsers);
    // Read - One -> get
    app.get("/api/users/:id", userC.oneUser);
    // Create -> post
    app.post("/api/users", userC.createUser);
    // Update -> put
    app.put("/api/users/:id", userC.updateUser);
    // Delete -> delete
    app.delete("/api/users/:id", userC.deleteUser);

    // *************************************************
    app.put("/api/blogpost/:id/new", userC.createBlogPost);

    app.put("/api/blogpost/:uid/:pid/delete", userC.deleteBlogPost);

    app.get("/api/:pid", userC.findBlogPost);
}
