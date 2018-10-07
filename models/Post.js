const { Schema, model } = require("mongoose");
const { Types } = Schema;

const PostSchema = new Schema({
  date: { type: Types.Date, default: Date.now },
  seller: { type: Types.ObjectId, ref: "User" },
  category: Types.String,
  title: Types.String,
  info: Types.String,
  price: Types.Number,
  access_type: Types.String,
  images: [Types.String]
});

const Post = model("Post", PostSchema);

module.exports = Post;
