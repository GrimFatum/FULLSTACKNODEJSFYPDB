var mongoose = require('mongoose');

var useranswerSchema=mongoose.Schema({
    _id_user:{
        type:mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true,
        ref:'User'
    },
    _id_test:
    {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true,
        ref:'Test'
    },
    _id_quest:{
        type:mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true,
        ref:'Quest'
    },
    _id_answer:{
        type:mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true,
        ref:'Answer'
    }
});

var UserAnswer = mongoose.model('UserAnswer', useranswerSchema);
module.exports.UserAnswer=UserAnswer;