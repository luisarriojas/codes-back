const express = require ('express');
const router = express.Router();

//This is /tags already


router.get('/', function (req, res) {
    res.send('get tags')
})
  

router.post('/', function (req, res) {
    const tag ={
        tagId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(200).json({
        message: 'post tag!',
        tag: tag
    })
})

router.get('/:tagId', function (req, res) {
    const receivedId=req.params.tagId;
    if (receivedId==='special'){
        res.status(200).json({
            message: 'Special tag!'
        })
    }else{
        res.status(200).json({
            message: 'get one tag'
        })
    }
})
  
  
router.delete('/:tagId', function (req, res) {
    res.status(200).json({
        message: 'deleted tag'
    })
})
  
module.exports=router;
