var mongoose = require('mongoose')
var Schema = mongoose.Schema
var commentSchema = new Schema({
    devocontID:{type:String, required:true},
    comntID:{type:String,required:true},
    author:{type:String},
    commentDate:{type:Date},
    numOfLikes:{type:Number},
    numOfShares:{type:Number},
    comnt:{type:String}
})
module.exports = mongoose.model('Comment',commentSchema)