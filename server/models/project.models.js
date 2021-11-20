const mongoose = require('mongoose')
const Schema = mongoose.Schema
const projectSchema = new Schema({
    course: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    number: {
        type: Number
    },
    link: {
        type: String
    },
    dueDate: {
        type: Number
    }

}, {
    timestamps: true
})
module.exports = mongoose.model('Project', projectSchema)