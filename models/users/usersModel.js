const mongoose = require("mongoose");

var Schema = mongoose.Schema;

let usersSchema = new Schema({
  Username: String,
  Password: String,
});

module.exports = mongoose.model("users", usersSchema);
