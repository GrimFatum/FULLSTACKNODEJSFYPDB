var mongoose = require('mongoose');

var userarticlesSchema=mongoose.Schema({
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
        ref:'Articles'
    }
});

var UserArticles = mongoose.model('UserArticles', userarticlesSchema);
module.exports.UserArticles=UserArticles;