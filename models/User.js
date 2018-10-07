let Schema = require('mongoose').Schema;
let model = require('mongoose').model;

const UserSchema ={

    token:String,
    username:String,
    password:String,
    name:String,
    phoneNumber:String,
    registered:Boolean,
    myPosts:[String],
    img_url:String,
};

const UserModel = model('User', UserSchema);

module.exports = {UserModel:UserModel}