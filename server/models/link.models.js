const mongoose = require('mongoose')
const Schema = mongoose.Schema
const linkSchema = new Schema({
    link: {
        type: String,
    },
    linkType: {
        type: String,
        enum: ['class', 'appointment', 'office hour']
    },
    cohort: {
        type: Schema.Types.ObjectId,
        ref: 'Cohort'
    },
    meetingId: {
        type: Number,
    },
    passcode: {
        type: String
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Link', linkSchema)