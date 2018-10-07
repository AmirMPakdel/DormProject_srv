const mongoose = require("mongoose");
const Schema = mongoose.Schema
const { Types } = Schema;

const UserSchema = new Schema({
  token: Types.String,
  username: Types.String,
  password: Types.String,
  name: Types.String,
  phone_number: Types.String,
  is_registered: Types.Boolean,
  img_url: Types.String
});


const User = mongoose.model("User", UserSchema);
module.exports = User;
