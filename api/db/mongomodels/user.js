const mongoose = require ('mongoose');


const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    walletNo: String,
    nickname: {type: String, required: true}, 
    email:{type: String},
    password:{type: String}
  });   

module.exports = mongoose.model('User', UserSchema);
// the collection is inferred from the model name


