const express=require('express');

const router = express.Router();
const Student = require('../model/student');
const mongoose=require('mongoose');
// using GET retrivimg the data from database
router.get('/', (req, res,next) => {
// res.status(200).json({
//     msg:"this is student get response"
// })
Student.find()
.then(result => {
    // console.log()
    res.status(200).json({
        studentData:result
    });
})
.catch(err => {
    console.log(err);
    res.status(500).json({
        error:err
    })
})
})
// this is how we can get data by using id 
router.get('/:id',(req, res, next) => {
// console.log(req.params.id);
Student.findById(req.params.id)
.then(result => {
    res.status(200).json({
        student:result
    })
})
.catch(err => {
    console.log(err);
    res.status(500).json({
        error:err
    })
})
})
// router.post('/', (req, res, next) => {
//     res.status(200).json({
//         msg:"this is student post response"
//     })
// })
router.post('/', (req, res, next) => {
//    console.log(req.body); 
const student = new Student({
    _id:new mongoose.Types.ObjectId,
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    gender:req.body.gender
})
student.save()
.then(result=>{
    console.log(result);
    res.status(200).json({
        newStudent:result
    })
})
.catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    })
})
})
// Delete Request
router.delete('/:id', (req, res, next) => {
    Student.remove({_id:req.params.id}) 
  .then(result=>{
    res.status(200).json({
        message:"data deleted",
        result:result
    })
  }) 
  .catch(err=>{
    res.status(500).json({
        error:err
    })
  })
})
//PUT Request
router.put('/:id',(req,res,next)=>{
    console.log(req.params.id);
    Student.findOneAndUpdate({_id:req.params.id},
        {
            $set:{
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone,
                gender:req.body.gender
            }
        })
    .then(result=>{
        res.status(200).json({
            updated_product:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})
module.exports= router;