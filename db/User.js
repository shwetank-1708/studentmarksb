const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  first: Number,
  second: Number,
  third: Number,
  fourth: Number,
  fifth: Number,
});

module.exports = mongoose.model("users", userSchema);
