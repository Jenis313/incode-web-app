const mongoose = require('mongoose')
const Schema = mongoose.Schema
const feedbackSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    topic: {
        type: String,
        enum: [/* TODO: Insert enum here*/],
        required: true
    },
    feedback: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Feedback', feedbackSchema)