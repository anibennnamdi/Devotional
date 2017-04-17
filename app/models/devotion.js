
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DevSchema = new Schema({
    ministry_id: { type: Schema.Types.ObjectId, ref: 'Ministry' },
    devoDate: { type: Date, required: true },
    devoTopic: { type: String },
    devoText: { type: String },
    devoMessage: { type: String },
    devoPrayer: { type: String }
});
module.exports = mongoose.model('DevotionSchema', DevSchema)


