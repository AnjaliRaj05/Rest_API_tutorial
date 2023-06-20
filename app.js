const express = require('express');
const app=express();
const studentRouter = require('./api/routes/student');
const facultyRouter = require('./api/routes/faculty');
const userRouter = require('./api/routes/user');
// const productRouter = require('./api/routes/product');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/student',studentRouter);
app.use('/faculty',facultyRouter);
app.use('/user',userRouter);
// app.use('/product',productRouter);
// app.use('/product',productRouter);
app.use((req,res,next)=>
{ 
    // 404 for if in case url not found
    // 4040 will display error
    res.status(404).json({
        error:"bad request"
    })
})

// this is how to connect databse
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://anjaliraj41095:Anjali1234@cluster0.elh10cx.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.on('error',err=>{
   console.log("databased not connected");
});
mongoose.connection.on('connected',connected=>{
    console.log("database connected successfully");
});


// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'app is running'
//     })
// })

module.exports=app;