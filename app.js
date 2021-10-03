//express application
const express=require('express');
const app = express();
var cors = require('cors');
require('dotenv').config()


const bookmarkRoutes = require('./api/routes/bookmarks');
const userRoutes = require('./api/routes/users');
const tagRoutes = require('./api/routes/tags');

const mongoose = require ('mongoose');


mongoPwd=process.env.mongoPwd;

mongoose.connect("mongodb+srv://app-user:"+mongoPwd+"@maincodescluster.c1s93.mongodb.net/codesdb?retryWrites=true&w=majority",{}).catch(err=>{ console.log(err)});

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(cors());

app.use('/bookmarks', bookmarkRoutes);
app.use('/users', userRoutes);
app.use('/tags', tagRoutes);

app.use ((req, res, next)=>{
    res.status(200).json({
        message: 'This is the homepage'
    });

});

module.exports=app;


