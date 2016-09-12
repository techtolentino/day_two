var express = require('express');
var router = express.Router();
var Task = require('../models/tasks');

// Get homepage
router.get('/', ensureAuthenticated, function(req, res) {
	res.render('starter');
});

router.put('/:_id', function(req, res) {
    // update requested item from mongodb
    console.log(req.params, "REQ");

    var id = req.params;

    Task.findOne({_id: req.params}, function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send()
        } else {
            data.isDone = !data.isDone;
            data.save();
            console.log("the db has been updated");
            res.redirect('/starter');
        }
    })
});


function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		// req.flash('error_msg', 'You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;
