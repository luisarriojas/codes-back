const mongoose = require ('mongoose');


const BookmarkSchema = new mongoose.Schema({
    _Id: mongoose.Schema.Types.ObjectId,
    userID: mongoose.Schema.Types.ObjectId,
    title: String,
    url: String,
    dateCreated: String,
    dateUpdated: String,      //not relevant
    tags: Array,
    private: Number
    //others 
  });

module.exports = mongoose.model('Bookmark', BookmarkSchema,"bookmarks");
// the collection is inferred from the model name
