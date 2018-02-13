var Devotion = require('../models/devotion');

module.exports = {
    get: function (req, res, next) {

        Devotion.find({}, function (err, result) {
            if (err) return next(err);
            res.status(200).json({ status: 1, message: null, data: result });
        });

    },
    
    findOne: function (req, res, next) {
        Devotion.find({ ministry_id: req.params.id }, function (err, result) {
            if (err) return next(err);
            res.status(200).json({ status: 1, message: null, data: result });
        });
    },
    save: function (req, res, next) {
        var seeDate = req.body.devoDate;
        
        var devotioncont = new Devotion({
            ministry_id: req.body.ministry_id,
            devoDate: seeDate,
            devoTopic: req.body.devoTopic,
            devoText: req.body.devoText,
            devoMessage: req.body.devoMessage,
            devoPrayer: req.body.devoPrayer
        });
        devotioncont.save(function (err, response) {
            if (err) {
                res.status(400).json({ status: 0, message: JSON.stringify(err) });
            } else {
                res.status(201).json({
                    status: 1,
                    message: 'Category has been created successfully',
                    data: response
                });
            }
        })

    }

}
