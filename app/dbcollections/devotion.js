var express = require('express'),
    mongoose = require('mongoose')
var devotion = express()
var Schema = mongoose.Schema
var postSchema = new Schema({
    minID: {
        type: String,
        required: true  
    },
    devotID: {
        type: Number,
        required: false,
        
    },
    devoTopic: {
        type: String,
        required: false,
        trim: true
    },
    devoText: {
        type: String,
        required: false,
        trim: true
    },
    devoMessage: {
        type: String,
        required: false,
    },
    devoDate: {
        type: Date,
        required: false
    },
})
var Post = dbConnection.model('Post', postSchema, 'devotion')//here we are craeting a model from the Schema
module.exports = mongoose.model('Devotioncont', postSchema);