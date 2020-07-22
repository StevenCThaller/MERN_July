const controller = require('../controllers/truck.controller');

module.exports = function(app){
    // Read Routes --> app.get
    app.get('/api/trucks', controller.allTrucks);
    app.get('/api/trucks/:id', controller.oneTruck);
    // Create Routes --> app.post
    app.post('/api/trucks', controller.newTruck);
    // Update Routes --> app.patch
    app.patch('/api/trucks/:id', controller.editTruck);
    app.patch('/api/trucks/:id/review', controller.addReview);
    // Delete Routes --> app.delete
    app.delete('/api/trucks/:id', controller.deleteTruck);
}