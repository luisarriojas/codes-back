
const mongoose = require ('mongoose');

    const User = require('./mongomodels/user');

var myValue='long value';
function testingDBs (){
    return ('the value is: '+myValue);
}

function newUser (){
    return ('the value is: '+myValue);
}

// This worked 
// module.exports.myValue=1;

module.exports = {
    myValue,
    testingDBs,
};