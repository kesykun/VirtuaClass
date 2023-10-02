const path = require('path');
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const studentSchema = new Schema(
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
        age: {
            type: String,
            required: true
        },
        courses_taken_id: {
            type: [mongoose.SchemaTypes.ObjectId],
            required: true
        }
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('students', studentSchema);