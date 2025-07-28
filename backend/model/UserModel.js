const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  mobile: String,
  password: String,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
