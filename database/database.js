const mongoose = require('mongoose');

const mongoose_init = ()=>{

    mongoose.connect('mongodb://localhost/DormProject');
}

const test = ()=>{

    

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
    
    const UserModel = mongoose.model('User', UserSchema);

    let me = new UserModel({
        token:'some Token 13123',
        username:'amir',
        password:'amir77',
        name:'AmirMohammad',
        phoneNumber:'0911',
        registered:true,
        myPosts:['1234123','45667'],
        img_url:'http://asdasdasd/asdassdassd/asdd.png',
    })

    me.save().then(()=>{console.log('saved!')})
}

module.exports={mongoose_init:mongoose_init,test:test}