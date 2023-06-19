const express=require('express');
const router = express.Router();
const mongoose=require('mongoose');

const User=require('../model/user');

router.get('/',(req, res, next) =>
{
    res.status(200).json({
        message:'user route working'
    })
})

module.exports= router;