
exports.up = function(knex, Promise) {
	return Promise.all([
		knex.schema.createTable("reminders", function (table) {
			table.integer("id");
			table.string("title");
			table.dateTime("when");
			table.timestamps(false, true);
		})
	]);
};

exports.down = function(knex, Promise) {
	return Promise.all([
		knex.schema.dropTable("reminders")
	]);
};
