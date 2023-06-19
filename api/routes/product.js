// // const express=require('express');

// // const router = express.Router();
// // const Product = require('../model/product');
// // const mongoose=require('mongoose');
// // // using GET retrivimg the data from database
// // //GET request
// // router.get('/', (req, res,next) => {
// // Product.find()
// // .exec()
// // .then(result => {
// //     // console.log()
// //     res.status(200).json({
// //         Product:result
// //     });

// // })
// // .catch(err => {
// //     console.log(err);
// //     res.status(500).json({
// //         error:err
// //     })
// // })
// // })
// // // this is how we can get data by using id 
// // router.get('/:id',(req, res, next) => {
// // // console.log(req.params.id);
// // const_id=req.params.id;
// // Product.findById(_id)
// // .exec()
// // .then(result => {
// //     console.log(result);
// //     res.status(200).json({
// //         product:result
// //     })
// // })
// // // .catch(err => {
// // //     console.log(err);
// // //     res.status(500).json({
// // //         error:err
// // //     })
// // // })
// // })
// // // post request
// // router.post('/', (req, res, next) => {
// //   console.log(req.body); 
// // const product = new Product({
// //     _id:new mongoose.Types.ObjectId,
// //     code:req.body.code,
// //     title:req.body.title,
// //     description:req.body.description,
// //     mrp:req.body.mrp,
// //     sp:req.body.sp,
// //     discountPercent:req.body.discountPercent,
// //     imagePath:req.body.imagePath
// // });
// // product.save()
// // .then(result=>{
// //     console.log(result);
// //     res.status(200).json({
// //         new_product: result
// //     })
// // })
// // .catch(err=>{
// //     console.log(err);
// //     res.status(500).json({
// //         error:err
// //     })
// // })
// // })
// // // delete request
// // router.delete('/:id',(req, res,next)=>{
  
// // })
// // module.exports= router;
// const express=require('express');
// const Product = require('../model/product');
// const router = express.Router();

// router.get('/', (req, res,next) => {
// Product.find()
// .exec()
// .then(result=>{
//     res.status(200).json({
//         // msg:"this is product get response"
//     Product:result
// })
// })
// })
// // get by ID request
// router.get('/:id',(req,res,next)=>{
//     const_id=req.params.id;
//     Product.findById(_id)
//     .exec() 
//     .then(result=>{
//         console.log(result);
//         res.status(200).json({
//             product:result
//         })
//     })
// })
// router.post('/', (req, res, next) => {
//     console.log(req.body);
//     const product=new Product({
//         _id:new mongoose.Types.ObjectId,
//         name:req.body.name,
//         email:req.body.email,
//         phone:req.body.phone,
//         gender:req.body.gender
//     })
// // product.save()
// // .then(result=>{
// //   console.log(result);  
// //   res.status(200).json({
// //     new_product:result
// //   })
// // })
// // .catch(err=>{
// //     console.log(err);
// //     res.status(500).json({
// //         Error:err
// //     })
// // })
   
// })
// module.exports= router;