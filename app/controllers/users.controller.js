var Users = require('../models/users');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

module.exports = {
    get: function (req, res, next) {

        Users.find({}, function (err, result) {
            if (err) return next(err);
            res.status(200).json({ status: 1, message: null, data: result });
        });

    },
    save: function (req, res, next) {
        var inneremail = (req.body.email).toLowerCase();
        var innername = (req.body.name).toUpperCase();
        var usercont = new Users({
            name: innername,
            email: inneremail,
            password: req.body.password,
            logged: 0
        });

        Users.findOne({ email: inneremail }, function (err, existingUser) {
            if (existingUser) {
                console.log("testing", existingUser);
                console.log(inneremail + "  is already existing");
                res.json({ message: "the user email " + inneremail + " is already existing" });
            }
            else {
                usercont.save(function (err, response) {
                    if (err) {
                        res.status(400).json({ status: 0, message: JSON.stringify(err) });
                    } else {
                        res.status(201).json({
                            status: 1,
                            message: 'User has been created successfully',
                            data: response
                        });
                    }
                });
            }

        });


    },


    delete: function (req, res, next) {
        Users.find({}).remove().exec(function (err, result) {
            res.json({ result });
        })
    },
    deleteOne: function (req, res, next) {
        Users.findOne({ _id: req.params.id }).remove().exec(function (err, result) {
            res.json({ result });
        })
    },
    //, email: req.params.email 
    find: function (req, res, next) {
        Users.findOne({ name: req.params.id }, function (err, result) {
            if (err) return next(err);
            res.status(200).json({ status: 1, message: null, data: result });
        });
    },
    findOne: function (req, res, next) {
        Users.findOne({ _id: req.params.id }, function (err, result) {
            if (err) return next(err);
            res.status(200).json({ status: 1, message: "ok", data: result });
        });
    },
    findOneByName: function (req, res, next) {
        Users.findOne({ name: req.params.name }, function (err, result) {
            if (err) return next(err);
            res.status(200).json({ status: 1, message: "ok", data: result });
        });
    },
    findemail: function (req, res, next) {
        Users.findOne({ email: req.params.id }, function (err, result) {
            if (err) return next(err);
            res.status(200).json({ status: 1, message: null, data: result });
        });
    },
    findcontact: function (req, res, next) {
        Users.findOne({ contact: req.params.id }, function (err, result) {
            if (err) return next(err);
            res.status(200).json({ status: 1, message: null, data: result });
        });
    },
    check: function (req, res, next) {
        var usercont = new Users({
            email: req.body.email,
            password: req.body.password
        });

        Users.findOne({ email: req.body.email }, function (err, existingUser) {
            console.log("existingUser", existingUser);
            if (err) return next(err);
            if (!existingUser) {
                console.log("wromg username", existingUser);
                return next(null, false, res.json({ "message": "user does not exist yet" }));
            }
            if (!existingUser.comparePassword(req.body.password)) {
                return next(null, false, res.json({ "message": "Please enter correct password" }));
            }
            // return next(existingUser, null);
            existingUser.logged++;
            existingUser.save(function (err, existingUser) {
                if (err) return next(err);
                res.status(201).json({
                    status: 1,
                    message: 'login successful!',
                    data: existingUser
                });
            });
        });

    },
    unlock: function (req, res, next) {
        var usercont = new Users({
            name: req.body.name,
            password: req.body.password
        });

        Users.findOne({ name: req.body.name }, function (err, existingUser) {
            console.log("existingUser", existingUser);
            if (err) return next(err);
            /*if (!existingUser) {
            console.log("wromg username",existingUser);
                return next(null, false, res.json({ "message": "user does not exist yet" }));
            }*/
            if (!existingUser.comparePassword(req.body.password)) {
                return next(null, false, res.json({ "message": "Please enter correct password" }));
            }
            // return next(existingUser, null);
            //existingUser.logged++;
            existingUser.save(function (err, existingUser) {
                if (err) return next(err);
                res.status(201).json({
                    status: 1,
                    message: 'unlocked successfully',
                    data: existingUser
                });
            });
        });

    },

    update: function (req, res, next) {
        Users.findOne({ _id: req.params.id }, function (err, result) {
            if (err) return next(err);
            result.set(req.body)
            result.save(function (err, result) {
                if (err) return next(err);
                res.status(201).json({
                    status: 1,
                    message: 'user details has been updated successfully',
                    data: result
                });
            });

        });
    }

}
