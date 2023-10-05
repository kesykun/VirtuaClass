const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const enrollmentSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        middlename: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        guardianFirstname: {
            type: String,
            required: true
        },
        guardianMiddlename: {
            type: String,
            required: true
        },
        guardianLastname: {
            type: String,
            required: true
        },
        guardianContactNumber: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);



module.exports = mongoose.model('enrollments', enrollmentSchema);