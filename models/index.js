const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;

db.companies = require("./companies.model")(mongoose);

module.exports =db;