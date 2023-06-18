const express=require('express');
const router = express.Router();
router.get('/', (req, res,next) => {
res.status(200).json({
    msg:"this is faculty get response"
})
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        msg:"this is facullty post response"
    })
})
module.exports= router;