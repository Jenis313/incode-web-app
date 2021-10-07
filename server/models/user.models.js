//USER ENTITIES RELATED MODELLING
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    middlename: {
        type: String
    },
    firstname: {
        type: String,
        required: true,
    },
    cohort: {
        type: Schema.Types.ObjectId,
        ref: 'Cohort'
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    darkTheme: {
        type: Boolean,
        required: true
    },
    role: {
        type: Number,
        enum: [1, 2, 3], //1 -> admin, 2 -> trainer, 3 -> student
        required: true
    },
    submissions: [{
        type: Schema.Types.ObjectId,
        ref: 'Submission'
    }],
}, {
    timestamps: true
})
module.exports = mongoose.model('User', userSchema);
