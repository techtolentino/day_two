var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({
	title: {
		type: String
	},
	squad: {
		type: String
	},
	isDone: {
		type: Boolean
	},
	resource: {
		type: String
	},
	notes: {
		type: String
	},
	links: {
		type: Array,
		default: []
	}
});

var Task = module.exports = mongoose.model('Task', taskSchema);