var Task = require('../models/tasks');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_DAY_TWO);

var tasks = [
	{
		title: "Meet your people",
		squadname: "Demo squad",
		isDone: false,
		resource: {
			name: "Ryan Barber",
			email: "ryanbarber@test1.com"
		},
		notes: "First things first, let's get to know each other. We'll have a quick meeting to introduce ourselves and learn about you!",
		links: [
			{
				title: "About our product team",
				url: "http://test1.com"
			},
			{
				title: "Team Mission & Vision",
				url: "mission_vision_doc.pdf"
			}
		]
	},
	{
		title: "Setting up your environment",
		squadname: "Demo squad",
		isDone: false,
		resource: {
			name: "James Mitchell",
			email: "jamesmitchell@test1.com"
		},
		notes: "First things first, you need the tools and applications to be able to do your job well. Let's get everything that you'll need!",
		links: [
			{
				title: "Getting started with GitHub",
				url: "http://test1.com"
			},
			{
				title: "Design environment",
				url: "http://test1.com"
			},
			{
				title: "Developer environment",
				url: "http://test1.com"
			}
		]
	},
	{
		title: "Logistical tour",
		squadname: "Demo squad",
		isDone: false,
		resource: {
			name: "Jane Smith",
			email: "janesith@test1.com"
		},
		notes: "In order to comfortably navigate your new workspace, one must become familiar with the landscape. Let's take a tour!",
		links: [
			{
				title: "Campus map",
				url: "http://test1.com"
			},
			{
				title: "Studio directory PDF",
				url: "studiodirectory.pdf"
			}
		]
	}
]

var done = 0;

tasks.forEach(function(item) {
	var item = new Task(item);
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