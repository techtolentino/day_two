var mongoose = require('mongoose');

var taskListSchema = mongoose.Schema({
	squad: {
		type: String
	},
	tasks: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Task'
	}]
})

var TaskList = module.exports = mongoose.model('TaskList', taskListSchema);