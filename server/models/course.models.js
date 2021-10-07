const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CourseSchema = new Schema({
    course: {
        type: String,
        enum: ['Get Into Tech', 'INCODE', 'InMarketing', 'Build & Click', 'Get Into Green'],
        required: true
    },
    cohorts: [{
        type: Schema.Types.ObjectId,
        ref: 'Cohort'
    }],
    content: [{
        type: Schema.Types.ObjectId,
        ref: 'Content'
    }]
}, {
    timestamps: true
})
module.exports = mongoose.model('Course', CourseSchema)