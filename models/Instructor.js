const path = require('path');
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
        gcash_account_id: {
            type: String,
            required: true
        },
        qr_code: {
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
        age: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('instructors', instructorSchema);