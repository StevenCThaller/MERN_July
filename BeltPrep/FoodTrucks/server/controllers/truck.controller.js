const Truck = require('../models/truck');

module.exports = {
    // Read Methods --> app.get
    allTrucks: (req, res) => {
        Truck.find({})
            .then(trucks => res.json({ message: "success", results: trucks }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    oneTruck: (req, res) => {
        Truck.findOne({ _id: req.params.id })
            .then(truck => res.json({ message: "success", results: truck }))
            .catch(err => res.json({ message: "errors", results: err }));
    },
    // Create Methods --> app.post
    newTruck: (req, res) => {
        Truck.create(req.body)
            .then(truck => res.json({ message: "success", results: truck }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    // Update Methods --> app.patch
    editTruck: (req, res) => {
        Truck.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true })
            .then(truck => res.json({ message: "success", results: truck }))
            .catch(err => res.json({ message: "error", results: err }))
    },
    addReview: (req, res) => {
        Truck.findOne({ _id: req.params.id })
            .then(truck => {
                if(truck.reviews.some( review => review.name === req.body.name)){
                    res.json({ message: "error", results: "That person has already left a review."})
                } else {
                    truck.reviews.push(req.body);
                    truck.save();
                    res.json({ message: "success", results: truck });
                }
            })
            .catch(err => res.json({ message: "error", results: err }));
    },
    // Delete Methods --> app.delete
    deleteTruck: (req, res) => {
        Truck.findOneAndDelete({ _id: req.params.id })
            .then(truck => res.json({ message: "success", results: truck }))
            .catch(err => res.json({ message: "error", results: err }));
    }
}