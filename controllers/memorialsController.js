const db = require("../models");

// Defining methods for the memorialsController
module.exports = {
        findAll: function (req, res) {
                console.log("controller");
                db.Memorial
                        .find(req.query)
                        .then(dbModel => res.json(dbModel))
                        .catch(err => res.status(422).json(err));
        },
        findById: function (req, res) {
                db.Memorial
                        .findById(req.params.id)
                        .then(dbModel => res.json(dbModel))
                        .catch(err => res.status(422).json(err));
        },
        create: function (req, res) {
                db.Memorial
                        .create(req.body)
                        .then(dbModel => res.json(dbModel))
                        .catch(err => res.status(422).json(err));
        },
        // update: function (req, res) {
        //         db.Memorial
        //                 .findOneAndUpdate({ _id: req.params.id }, req.body)
        //                 .then(dbModel => res.json(dbModel))
        //                 .catch(err => res.status(422).json(err));
        // },
        // remove: function (req, res) {
        //         db.Memorial
        //                 .findById({ _id: req.params.id })
        //                 .then(dbModel => dbModel.remove())
        //                 .then(dbModel => res.json(dbModel))
        //                 .catch(err => res.status(422).json(err));
        // }
};
