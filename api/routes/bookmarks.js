const express = require ('express');
const router = express.Router();



//This is /bookmarks already


router.get('/', function (req, res) {
    res.send('Bookmarks')
})
  

router.post('/', function (req, res) {
    
    const bookmark = {
        // now this is parsed from json-parser (express)
        name: req.body.name,
        price: req.body.price
    }
    
    res.status(200).json({
        message: 'wrong!',
        createdbookmark: bookmark
    })
    console.log(bookmark);
    

})

router.get('/:bookmarkId', function (req, res) {
    const receivedId=req.params.bookmarkId;
    if (receivedId==='special'){
        res.status(200).json({
            message: 'Special!'
        })
    }else{
        res.status(200).json({
            message: 'normal individual bookmark'
        })
    }
})
  
router.patch('/:bookmarkId', function (req, res) {
    res.status(200).json({
        message: 'updated bookmark'
    })
})
  
router.delete('/:bookmarkId', function (req, res) {
    res.status(200).json({
        message: 'deleted bookmark'
    })
})
  
module.exports=router;
