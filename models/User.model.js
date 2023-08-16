const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  subName: String,
  login: String,
  password: String,
  avatar: {
    type: String,
    default: "images\\default_avatar.jpg"
  },
  status: {type: String, default: 'Hey there! I am using WhatsApp'}
});

const User = mongoose.model("User", userSchema);
module.exports = User;
