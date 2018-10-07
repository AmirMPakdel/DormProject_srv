const { model, Schema } = require("mongoose");
const { Types } = Schema;


const UserSchema = {
  token: Types.String,
  username: Types.String,
  password: Types.String,
  name: Types.String,
  phoneNumber: Types.String,
  registered: Types.Boolean,
  myPosts: [{ type: Types.ObjectId, ref: "Post" }],
  img_url: Types.String
};

const User = model("User", UserSchema);
module.exports = User;
