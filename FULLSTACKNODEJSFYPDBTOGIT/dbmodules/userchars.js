var mongoose = require('mongoose');

var usercharsSchema = mongoose.Schema({
    _id_user: {
        type: mongoose.Schema.Types.ObjectId, unique: true, required: true
    },
    psychoType:{
        type: String
    },
    objectOfActivity:{
        type: String
    },
    funcOfActivity:{
        type: String
    },
    componentsOfActivity:{
        type: String
    }
});
var UserChars = mongoose.model('UserChars', usercharsSchema);
module.exports.UserChars=UserChars;