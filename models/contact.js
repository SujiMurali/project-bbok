var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var schema = new  mongoose.Schema({
    
    name: String,
    
    email : String,
    subject: String,
    message : String
   
});
module.exports = mongoose.model('Contact',schema);