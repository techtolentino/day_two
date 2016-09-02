var express = require('express');
var router = express.Router();

// Get homepage
router.get('/', function(req, res) {
	res.render('starter');
});

module.exports = router;
