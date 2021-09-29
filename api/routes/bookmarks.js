const express = require ('express');
const router = express.Router();
const mongoose = require('mongoose');

const mongoService = require('../db/mongoService');
const Bookmark = require('../db/mongomodels/bookmark');
const bookmark = require('../db/mongomodels/bookmark');


//This is /bookmarks already

router.get('/', function (req, res) {
    //res.send('I will get Bookmarks (coming soon)')

    Bookmark.find().exec().then(results=>{
        res.status(200).json({results})
    }

    ).catch()
    

})
  

router.post('/', async function (req, res) {
    
    const bookmark = new Bookmark ({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        url: req.body.url,
        tags: req.body.tags,
        private: req.body.private
    });
    await bookmark.save().then(bm=>{
            res.status(200).json({
                message: 'Bookmark Created!',
                createdbookmark: bm._id
            })
        }
    ).catch(err =>{
        res.status(500).json({
            message: 'Server Error', 
            error: err
        })
        console.log ('error found');
        console.log(err);
    } 
    )
    //console.log(bookmark);
})

router.get('/:bookmarkId', async function (req, res) {
    const receivedId=req.params.bookmarkId;
    // if (receivedId==='special'){
    //     res.status(200).json({
    //         message: 'Special!'
    //     })
    // }else{
    //     res.status(200).json({
    //         message: 'normal individual bookmark'
    //     })
    // }

    await bookmark.findById({_id: receivedId}).exec().then(bookmark=>{
        if (bookmark){
            res.status(200).json(bookmark)
        }else{
            res.status(500).json({
                message: 'bookmark does not exist'
            })    
        }
    }).catch(err=>{
        console.log('error found:')
        console.log(err);
        res.status(500).json({
            message: 'error getting bookmark',
            err: err
        })
    })
})
  
router.patch('/:bookmarkId', function (req, res) {
    // res.status(200).json({
    //     message: 'updated bookmark'
    // })
    receivedId= req.params.bookmarkId;
    const updateOps={};
    console.log('ReceivedID: '+receivedId)
    for (const ops of req.body){
        updateOps[ops.propName]=ops.value;
        console.log("propName:" + ops.propName);
        console.log("value:" + ops.value);
        
    }
    Bookmark.findOneAndUpdate({_id: receivedId},{$set: updateOps}).exec().then(result=>{
        res.status(200).json({message: 'ok'})
    }).catch(err=>{
        console.log('error found:')
        console.log(err);
        res.status(500).json({
            message: 'error deleting bookmark',
            err: err
        })
    });
})
  
router.delete('/:bookmarkId', async function (req, res) {
    receivedId=req.params.bookmarkId;
    await bookmark.deleteOne({_id: receivedId}).exec().then(result=>{
        res.status(200).json({
            message: 'deleted bookmark',
            result: result
        })
    }).catch(err =>{
        console.log('error found:')
        console.log(err);
        res.status(500).json({
            message: 'error deleting bookmark',
            err: err
        })

    });

})
  
module.exports=router;
