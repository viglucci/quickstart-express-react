const low              = require("lowdb");
const path             = require("path");
const fileAsyncStorage = require("lowdb/lib/file-async");
const underscoreDb     = require("underscore-db");

const db = low(path.resolve(__dirname, "../db.json"), { storage: fileAsyncStorage });
db._.mixin(underscoreDb);
db.defaults({ reminders: [] }).value();

module.exports = db;
