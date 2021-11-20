
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const CohortSchema = new Schema({
    name: {
        type: 'String' //Incode-6 etc.
    },
    course:{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    recordings: [{
        type: Schema.Types.ObjectId,
        ref: 'Recording'
    }],
    days: [
        {
            day: {
                type: Number,
                enum: [1,2,3,4,5,6]
            },
            startTime: {
                type: String
            },
            endTime: {
                type: String
            },
        }
    ],
    classList: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    trainer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    submissions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Submission'
        }
    ]
}, {
    timestamps: true
})
module.exports = mongoose.model('Cohort', CohortSchema)