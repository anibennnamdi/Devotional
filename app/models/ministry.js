var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ministrySchema = new Schema({
    minID:{type:String,required:true},
    minName:{type:String,require:true}
});
module.exports = mongoose.model('Ministry',ministrySchema)
