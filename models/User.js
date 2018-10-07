const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { Types } = Schema;

const UserSchema = new Schema({
  verification_code: { type: Types.String, default: null },
  token: Types.String,
  username: Types.String,
  password: Types.String,
  name: Types.String,
  phone_number: Types.String,
  is_registered: Types.Boolean,
  img_b64: Types.String
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
