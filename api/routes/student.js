const express=require('express');

const router = express.Router();
router.get('/', (req, res,next) => {
res.status(200).json({
    msg:"this is student get response"
})
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        msg:"this is student post response"
    })
})

module.exports= router;