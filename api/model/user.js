const mongoose = require('mongoose');
// create schema

const userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    username:String,
    password:String,
    email:String,
    phone:Number,
    userType:String
    // gender:String,

})
module.exports=mongoose.model('user',userSchema);