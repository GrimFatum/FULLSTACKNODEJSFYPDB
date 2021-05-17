var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
    _id_test:
    {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true,
        ref: 'Test'
    },
    _id_quest: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true
    },
    QuestText: String
});

var Quest = mongoose.model('Quest', questionSchema);
module.exports.Quest = Quest;