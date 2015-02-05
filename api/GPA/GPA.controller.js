'use strict';

var mongoose = require('mongoose');

// Defining Model
// =====================================================

var GPA = mongoose.model('GPA', {
    name: String,
    credit: Number,
    grade: String
});

// Defining Routes
// =====================================================

exports.index = function(req, res) {
    GPA.find(function (err, GPAs) {
        if (err) {
            console.log("Error getting data from database");
            res.send(err)
        } else {
            res.json(GPAs); // return results
        }
    });
};

exports.create = function(req, res) {
    GPA.create(req.body, function (err, GPAs) {
        if (err) {
            res.send(err);
        } else {
            GPA.find(function (err, GPAs) {
                if (err) {
                    res.send(err);
                }

                res.json(GPAs);
            });
        }
    });
};

exports.destroy = function(req, res) {
    GPA.findById(req.params.GPA_id, function(err, grades){
        if(err) { res.send(err); return "error: " + err; }
        if(!grades) { return res.sendStatus(404); }

        GPA.remove(function(err){
            if(err) { return "error: " + err}
            return res.sendStatus(204);
        });
    });
};