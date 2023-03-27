const User = require('../models/user.model.js');


exports.create = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).send({
            message: 'User name, email and password cannot be empty.'
        });
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    console.log(user);
    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the user.'
            });
        });
};

exports.findAll = (req, res) => {
    User.find()
        .then(user => {
            res.send(user);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving users.'
            })
        })
};

exports.findOne = (req, res) => {
    User.findOne({ _id: req.params.userId })
        .then(user => {
            res.send(user);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving users.'
            });
        })
};

exports.update = (req, res) => {
    const userId = { _id: req.params.userId }
    const contentUpdate = {
        $set: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

    }
    User.updateOne(userId, contentUpdate)
        .then(result => {
            res.send({
                message: 'User updated successfully'
            });
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while updating users.'
            });
        })
};

exports.delete = (req, res) => {
    User.deleteOne({ _id: req.params.userId })
        .then(result => {
            result.deletedCount > 0 ? res.send({
                message: 'Deleted successfully'
            }) : res.send({
                message: 'Do nothing was deleted successfully'
            })
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while deleting users.'
            });
        })
};