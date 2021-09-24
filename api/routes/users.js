const express = require ('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../db/mongomodels/user');

//This is /users already


router.get('/', function (req, res) {
    res.send('get users!')
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
    }).catch(err => console.log(err));
    res.status(200).json({
        message: 'post user!',
        user: user
    })
})

router.get('/:userId', function (req, res) {
    const receivedId=req.params.userId;
    if (receivedId==='special'){
        res.status(200).json({
            message: 'Special user!'
        })
    }else{
        res.status(200).json({
            message: 'get one user'
        })
    }
})
  
  
router.delete('/:userId', function (req, res) {
    res.status(200).json({
        message: 'deleted user'
    })
})
  
module.exports=router;
