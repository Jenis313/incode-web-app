const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordingSchema = new Schema({
    week:{
        type: Number,
    },
    link: {
        type: String
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    cohort: {
        type: Schema.Types.ObjectId,
        ref: 'Cohort'
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('Recording', recordingSchema)