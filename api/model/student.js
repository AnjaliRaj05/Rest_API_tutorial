const mongoose = require('mongoose');
// create schema

const studentSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    phone:Number,
    gender:String,
   

})
module.exports=mongoose.model('Student',studentSchema);