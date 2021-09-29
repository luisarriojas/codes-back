const express = require ('express');
const router = express.Router();
const mongoose = require('mongoose');

const mongoService = require('../db/mongoService');
const Bookmark = require('../db/mongomodels/bookmark');


//This is /bookmarks already

router.get('/', function (req, res) {
    //res.send('I will get Bookmarks (coming soon)')

    Bookmark.find().exec().then(results=>{
        res.status(200).json({results})
    }

    ).catch()
    

})
  

router.post('/', function (req, res) {
    
    const bookmark = new Bookmark ({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        url: req.body.url
    });
    bookmark.save().then(bm=>{
            res.status(200).json({
                message: 'Bookmark Created!',
                createdbookmark: bm._id
            }) 
        }
    ).catch(
        res.status(500).json({
            message: 'Server Error'
        }) 
    )
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
