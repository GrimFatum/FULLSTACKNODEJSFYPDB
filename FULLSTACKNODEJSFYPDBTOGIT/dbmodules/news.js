var mongoose = require('mongoose');

var newsSchema = mongoose.Schema({
    _id_news:{
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

var News = mongoose.model('News', newsSchema);
module.exports.News=News;