var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

global.User = mongoose.model('User',new mongoose.Schema({
    username:String
}));