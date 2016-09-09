var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({
	title: {
		type: String
	},
	squadname: {
		type: String
	},
	isDone: {
		type: Boolean
	},
	resource: {
		name: String,
		email: String
	},
	notes: {
		type: String
	},
	links: [
		{
			title: String,
			url: String
		}
	]
});

var Task = module.exports = mongoose.model('Task', taskSchema);