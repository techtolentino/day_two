var express = require('express');
var router = express.Router();

// Get registration
router.get('/register', function(req, res) {
	res.render('register');
});

router.get('/login', function(req, res) {
	res.render('login');
});

// Post registration
router.post('/register', function(req, res) {
	var firstname = req.body.firstname,
		lastname = req.body.lastname,
		username = req.body.username,
		email = req.body.email,
		password = req.body.password,
		password2 = req.body.password2;

	// form validation
	req.checkBody('firstname', 'First name is required').notEmpty();
	req.checkBody('lastname', 'Last name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is invalid').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password', 'Passwords do not match').equals(req.body.password);

	var errors = req.validationErrors();

	if(errors) {
		res.render('register', {
			errors: errors
		});
		console.log("The form has errors");
	} else {
		console.log("Form successfully submitted");
	}

});

module.exports = router;
