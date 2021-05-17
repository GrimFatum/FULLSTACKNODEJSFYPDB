var mongoose = require('mongoose');

var answerSchema=mongoose.Schema({
    _id_quest:
    {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        unique:true,
        ref:'Quest'
    },
    _id_answer:{
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true
    },
    AnswerText:String
});

var Answer = mongoose.model('Answer', answerSchema);
module.exports.Answer=Answer;