const mongoose = require ('mongoose');


const BookmarkSchema = new Schema({
    _Id: ObjectId,
    userID: String,
    title: String,
    url: String,
    dateCreated: String,
    dateUpdated: String,
    tags: Array
  });   

module.exports = mongoose.model('Bookmark', BookmarkSchema);
  