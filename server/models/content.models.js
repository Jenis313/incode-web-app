const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ContentSchema = new Schema({
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    // week: {
    //     type: Number
    // },
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