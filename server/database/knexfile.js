process.chdir("../../")

const config = require("config");

module.exports = {
	development: config.database
};
