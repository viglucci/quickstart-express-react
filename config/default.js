const path = require("path");


module.exports = {
	database: {
		client: "sqlite3",
		connection: {
			filename: path.join("server", "database", "dev.sqlite3")
		},
		migrations: {
			directory: path.join("server", "database", "migrations"),
			tableName: "migrations"
		},
		seeds: {
			directory: path.join("server", "database", "seeders"),
		}
	}
};
