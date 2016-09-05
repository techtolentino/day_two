var Task = require('../models/tasks');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_DAY_TWO);

var tasks = [
	new Task({
		title: "Task 1",
		squadname: "Demo squad",
		isDone: false,
		resource: "John Doe",
		notes: "Lorem ipsum dolor sit amet.",
		links: [
			"http://test1.com",
			"http://test2.com",
			"http://test3.com"
		]
	}),
	new Task({
		title: "Task 2",
		squadname: "Demo squad",
		isDone: false,
		resource: "James Smith",
		notes: "Lorem ipsum dolor sit amet.",
		links: [
			"http://example1.com",
			"http://example2.com",
			"http://example3.com"
		]
	})
]

var done = 0;

tasks.forEach(function(item) {
	item.save(function(err, result) {
		done++;
		if (done === tasks.length) {
			exit();
		}
	})
});

function exit() {
	mongoose.disconnect();
}

// Usage:
// in terminal, run
// node seed/tasks.js