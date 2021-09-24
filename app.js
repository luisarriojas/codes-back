//express application
const express=require('express');
const app = express();
var cors = require('cors');

const bookmarkRoutes = require('./api/routes/bookmarks');
const userRoutes = require('./api/routes/users');
const tagRoutes = require('./api/routes/tags');

const mongoose = require ('mongoose');

// pwd: qi7wPDxp5uuTleqw
mongoose.connect("mongodb+srv://app-user:qi7wPDxp5uuTleqw@cluster0.c1s93.mongodb.net/codesdb?retryWrites=true&w=majority",{});

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


