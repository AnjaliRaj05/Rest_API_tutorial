const express = require('express');
const app=express();
const studentRouter = require('./api/routes/student');
const facultyRouter = require('./api/routes/faculty');
app.use('/student',studentRouter);
app.use('/faculty',facultyRouter);
app.use((req, res, next) => {
    res.status(200).json({
        message: 'app is running'
    })
})

module.exports=app;