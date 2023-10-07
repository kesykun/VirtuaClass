const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema(
    {
        date: {
            type: String,
            required: true
        },
        event: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('events', eventSchema);