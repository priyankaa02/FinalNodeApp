var mongoose = require('mongoose');
var db = require('../database_config/db_connect');

var userSchema = mongoose.Schema({
   full_name : String,

   // Database Aithenticate
   email : {type: String, required: true},
   password:{type: String , required: true},
   created_date :{type: Date,default: Date.now}

});
var User = mongoose.model('User',userSchema);
module.exports = User;
