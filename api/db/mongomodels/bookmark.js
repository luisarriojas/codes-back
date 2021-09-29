const mongoose = require ('mongoose');


const BookmarkSchema = new mongoose.Schema({
    _Id: mongoose.Schema.Types.ObjectId,
    userID: mongoose.Schema.Types.ObjectId,
    title: {type: String, required: true},
    url: {type: String, required: true},
    dateCreated: {type: Date, default: mongoose.now()},
    dateUpdated: {type: Date, required: false},      //not relevant
    tags: {type: Array, required: false},
    private: {type: Number, required: false, default: 0}
    //others 
  });

module.exports = mongoose.model('Bookmark', BookmarkSchema,"bookmarks");
// the collection is inferred from the model name
