const orm = require("../index.js");

const Reminder = orm.Model.extend({
	tableName: "reminders",
	hasTimeStamps: true
});

module.exports = Reminder;
