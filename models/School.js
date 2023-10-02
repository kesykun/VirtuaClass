const path = require('path');
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const schoolSchema = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        mission: {
            type: String,
            required: true
        },
        vision: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('schools', schoolSchema);