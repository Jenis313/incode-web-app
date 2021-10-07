const mongoose = require('mongoose')
const Schema = mongoose.Schema
const projectSchema = new Schema({
    course: {
        type: String
    },
    projectTitle: {
        type: String
    },
    projectDescription: {
        type: String
    },
    projectNumber: {
        type: Number
    },
    projectLink: {
        type: String
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Project', projectSchema)