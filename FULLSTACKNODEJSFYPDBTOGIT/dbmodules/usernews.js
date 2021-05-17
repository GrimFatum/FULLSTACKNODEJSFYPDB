var mongoose = require('mongoose');

var usernewsSchema=mongoose.Schema({
    _id_user:{
        type:mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true,
        ref:'User'
    },
    _id_news:
    {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true,
        ref:'News'
    }
});

var UserNews = mongoose.model('UserNews', usernewsSchema);
module.exports.UserNews=UserNews;