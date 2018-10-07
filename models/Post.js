let Schema = require('mongoose').Schema;
let model = require('mongoose').model;

const PostSchema = new Schema({

    date:{type:Data, default:Date.now},
    seller_name:String,
    seller_username:String,
    seller_phoneNumber:String,
    category:String,
    name:String,
    info:String,
    price:Number,
    accessType:String,
    img1_url:String,
    img2_url:String,
    img3_url:String
});

const PostModel = model('Post',PostSchema);

module.exports = {PostModel:PostModel}