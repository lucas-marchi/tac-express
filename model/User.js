const mongoose = require("mongoose");

const UserSchema  = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required:true},
    birth: {type: Date, required: false},
    createdAT: {type: Date, default: Date.now},
    updatedAT: {type: Date, default: Date.now}
});

module.exports = new mongoose.model('User', UserSchema, 'user');


