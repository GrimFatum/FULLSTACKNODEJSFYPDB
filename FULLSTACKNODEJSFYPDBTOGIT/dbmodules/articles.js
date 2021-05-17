var mongoose = require('mongoose');

var articlesSchema = mongoose.Schema({
    _id_articles:{
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true
    },
    name:String,
    date_created:{
        type: Date,
        default: Date.now()
    },
    content:String
});

var Articles = mongoose.model('Articles', articlesSchema);
module.exports.Articles=Articles;