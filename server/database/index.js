const bookshelf = require('bookshelf');
const knex      = require("knex");
const config    = require("config");

const connection = knex(config.database);

module.exports = bookshelf(connection);
