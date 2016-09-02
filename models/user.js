var mongoose = require('mongoose'),
	bcrypt = require('bcryptjs');

var userSchema = mongoose.Schema({
	name: {
		type: String
	},
	username: {
		type: String,
		index: true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	tasks: {
		type: Array,
		default: []
	}
});

var User = module.exports = mongoose.model('User', userSchema);

module.exports.createUser = function(newUser, callback) {
	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(newUser.password, salt, function(err, hash) {
			newUser.password = hash;
			newUser.save(callback);
		});
	});
}