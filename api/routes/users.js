const express = require ('express');
const router = express.Router();
const mongoose = require('mongoose');

const mongoService = require('../db/mongoService');
const User = require('../db/mongomodels/user');

var lastUserId="";
var lastUserName="";


//This is /users already


router.get('/', function (req, res) {
    // This is not a route!
    res.send('(This is NOT a route!) get users! DBTest: '+mongoService.testingDBs()+'. Last user: '+lastUserName)

})
  

router.post('/', function (req, res) {
    // const user ={
    //     walletNo: req.body.walletNo,
    //     nickname: req.body.nickname
    // }
    const user = new User ({
        _id: new mongoose.Types.ObjectId(),
        walletNo: req.body.walletNo,
        nickname: req.body.nickname
    });
    user.save().then(result => {
        console.log(result);
        lastUserId=user._id;
        lastUserName=user.nickname;
        console.log('lastusername (posted): '+lastUserName +'(id: '+ lastUserId + ')')

        res.status(200).json({
            message: 'post user!',
            user: user
            // or createdUser=result
        })

    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });

})

router.get('/:userId', function (req, res) {
    const receivedId=req.params.userId;
    
    User.findById(receivedId).exec().then(doc =>{
        console.log('From DB: ', doc);
        if (doc) {          //if not null  (when not found it returns null)
            res.status(200).json(doc);
            lastUserId=doc._id;
            lastUserName=doc.nickname;
            console.log('lastusername (retrieved): '+lastUserName +'(id: '+ lastUserId + ')')
        }else{
            res.status(404).json({message: 'no valid entry found'});
        }

    }).catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
})
  
  
router.delete('/:userId', function (req, res) {
    const receivedId=req.params.userId;
    User.deleteOne({_id: receivedId}).exec().then( result=>{
        res.status(200).json({
            message: 'user deleted',
            result: result
        }) 
    }).catch(err=>{
        res.status(500).json({
            err
        })
    });
})
  
module.exports=router;
