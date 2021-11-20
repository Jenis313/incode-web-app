// This refers to syllabus of the design
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ContentSchema = new Schema({
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    contentTitle: {
        type: String
    },
    contentDescription: {
        type: String
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'project'
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('Content', ContentSchema)