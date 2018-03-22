var mongoose = require('mongoose');
//var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;
var ProfileSchema = new Schema({

    name: {
        type: String,
        unique: true,
        
    },
    
     email: {
         type: String,
         unique: true,
         required: true,
         lowercase: true
     },
    
    
    logged: {
        type: Number,
        default:0
    }

});


module.exports = mongoose.model('Profiles', ProfileSchema)//mongoose.model('collectionName',SchemaName)


