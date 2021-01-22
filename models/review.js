const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    body: String,
    rating: Number,
    author: {
        type: Schema.Types.ObjectId,    //used to store only the ObjectId in reviewSchema 
        ref: 'User'
    }
});

module.exports = mongoose.model('Review', reviewSchema);