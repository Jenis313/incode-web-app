const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passwordResetSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    confirmed: {
        type: Boolean,
        required: true,
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('passwordReset', passwordResetSchema)