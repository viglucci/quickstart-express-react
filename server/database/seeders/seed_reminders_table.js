const moment = require("moment");

exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("reminders").del()
	.then(function () {
		// Inserts seed entries
		return knex("reminders").insert([
			{
				title: "Walk the dog.",
				when: moment().add(3, "hours").toDate().toISOString()
			},
			{
				title: "Cut the grass.",
				when: moment().add(1, "day").toDate().toISOString()
			},
			{
				title: "Defeat the burning legion.",
				when: moment().add(2, "weeks").toDate().toISOString()
			}
		]);
	});
};
