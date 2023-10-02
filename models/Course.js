const path = require('path');
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const courseSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        fee: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        instructor_id: {
            type: mongoose.SchemaTypes.ObjectId,
            required: true
        }
    },
    {
        timestamps: true
    }
);



module.exports = mongoose.model('courses', courseSchema);