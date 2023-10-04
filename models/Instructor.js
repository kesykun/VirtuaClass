const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const instructorSchema = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        account_type: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('instructors', instructorSchema);