const { model, Schema } = require("mongoose");
const { Types } = Schema;


const UserSchema = {
  token: Types.String,
  username: Types.String,
  password: Types.String,
  name: Types.String,
  phone_number: Types.String,
  is_registered: Types.Boolean,
  img_url: Types.String
};

const User = model("User", UserSchema);
module.exports = User;
