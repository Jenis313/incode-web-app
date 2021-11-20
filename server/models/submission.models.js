const mongoose = require('mongoose')
const Schema = mongoose.Schema
const SubSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    cohort: {
        type: Schema.Types.ObjectId,
        ref: 'Cohort'
    },
    link: {
        type: String, //github link etc.
        required: true
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    submittedDate: {
        type: Date,
        required: true
    },
    group: [
        {
            number : Number,
            users: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'User'
                }
            ]
        }
    ]
}, {
    timestamps: true
})
module.exports = mongoose.model('Submission', SubSchema)