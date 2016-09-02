var express = require('express');
var router = express.Router();

var User = require('../models/user');

// Get registration
router.get('/register', function(req, res) {
	res.render('register');
});

router.get('/login', function(req, res) {
	res.render('login');
});

// Post registration
router.post('/register', function(req, res) {
	var name = req.body.name,
		username = req.body.username,
		squadname = req.body.squadname,
		email = req.body.email,
		password = req.body.password,
		password2 = req.body.password2;

	// form validation
	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('squadname', 'Squad name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is invalid').isEmail();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password', 'Passwords do not match').equals(req.body.password);

	var errors = req.validationErrors();

	if(errors) {
		res.render('register', {
			errors: errors
		});
		console.log("The form has errors");
	} else {
		var newUser = new User({
			name: name,
			email: email,
			username: username,
			password: password
		})

		User.createUser(newUser,function(err, user) {
			if(err) throw err;
			console.log(user);
		})
		
		req.flash('success_msg', 'You are registered and can now log in');
		res.redirect('/users/login');
	}

});

module.exports = router;
