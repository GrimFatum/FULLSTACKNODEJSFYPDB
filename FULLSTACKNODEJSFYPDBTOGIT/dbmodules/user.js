const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var userSchema = mongoose.Schema({
    _id_user: {
        type: mongoose.Schema.Types.ObjectId, unique: true, required: true
    },
    e_mail: {
        type: String, unique: true, required: true
    },
    nickname: {
        type: String,unique: true,   required: true
    },
    gender: {
        type: String, enum:['male','female'],required: true
    },
    databirthing: {
        type: Date,default: Date.now()
    },
    password: {
        type: String, unique: true,
        required: true
    }
});
// hash the password
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
// checking if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};
var User = mongoose.model('User', userSchema);
module.exports.User=User;