var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

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

passport.use(new LocalStrategy(
	function(username, password, done) {
		User.getUserByUsername(username, function(err, user) {
			if(err) throw err;
			if(!user){
				return done(null, false, {message: 'Unknown user'});
			}
			User.comparePassword(password, user.password, function(err, isMatch){
				if(err) throw err;
				if(isMatch) {
					return done(null, user);
				} else {
					return done(null, false, {message: ''})
				}
			});
		});
	}
));

router.post('/login',
	passport.authenticate('local', {successRedirect: '/', failureRedirect: '/users/login', failureFlash: true}),
	function(req, res) {
		res.redirect('/');
	});

module.exports = router;
