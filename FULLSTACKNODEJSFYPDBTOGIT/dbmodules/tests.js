var mongoose = require('mongoose');

var testSchema=mongoose.Schema({
    _id_test:{
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true
    },
    name:String
});

var Test = mongoose.model('Test', testSchema);
module.exports.Test=Test;