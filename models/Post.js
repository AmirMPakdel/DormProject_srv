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

PostSchema.statics.findAllByUserID = function(id) {
  return new Promise((resolve, reject) => {
    this.find({ seller: new Types.ObjectId(id) }, (err, posts) => {
      if (err) {
        reject(err);
      } else {
        resolve(posts);
      }
    });
  });
};

const Post = model("Post", PostSchema);

module.exports = Post;
