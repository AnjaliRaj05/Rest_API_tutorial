
const express=require('express');
const router = express.Router();
const Product = require('../model/product');
const mongoose=require('mongoose');
//const checkAuth=require('../middleware/check-auth')
const cloudinary =require('cloudinary').v2;
cloudinary.config({
    cloud_name:'dmhdno2hw',
    api_key:'472582418148355',
    api_secret:'N3GpOC7b3kDzGY9sovscoAJj-uE'
});
router.get('/', (req, res,next) => {
    Product.find()
    .exec()
    .then(result => {
        res.status(200).json({
            productData: result
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})
// get by id request
router.get('/:id',(req, res, next) => {
    // console.log(req.params.id);
    // const file=req.files.photo;
    // cloudinary.uploader.upload(file.tempFilePath,(err,result) => {
    //     console.log(result);
    // })
    Product.findById(req.params.id)
    .then(result => {
        res.status(200).json({
            product:result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
    })
// post request
router.post('/', (req, res, next) => {
  //  console.log(req.body);
    const file=req.files.photo;
    cloudinary.uploader.upload(file.tempFilePath,(err,result) => {
        console.log(result);
    })
    // const product =new Product({
    //     _id: new mongoose.Types.ObjectId,
    //      code:req.body.code,
    //      title:req.body.title,
    //      description:req.body.description,
    //      mrp:req.body.mrp,
    //      sp:req.body.sp,
    //      discountPercent:req.body.discountPercent,
    //      imagePath:req.body.imagePath
    // })
    // product.save()
    // .then(result=>{
    //     console.log(result);
    //     res.status(200).json({
    //         new_product:result
    //     })
    // })
    // .catch(err=>{
    //     console.log(err);
    //     res.status(500).json({
    //         error:err
    //     })
    // })
})
// delete request
router.delete('/:id', (req, res, next) => {
    Product.remove({_id:req.params.id}) 
  .then(result=>{
    res.status(200).json({
        message:"product deleted",
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
    Product.findOneAndUpdate({_id:req.params.id},
        {
            $set:{
                code:req.body.code,
                title:req.body.title,
                description:req.body.description,
                mrp:req.body.mrp,
                sp:req.body.sp,
                discountPercent:req.body.discountPercent
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