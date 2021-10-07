const mongoose = require('mongoose')
const Schema = mongoose.Schema
const resourceSchema = new Schema({
    // title:{
    //     type: String,
    // },
    // description: {
    //     type: String
    // },
    tag: [String],
    link: {
        type: String
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Resource', resourceSchema)