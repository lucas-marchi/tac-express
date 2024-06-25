const mongoose = require("mongoose");

const EventSchema  = new mongoose.Schema({
    deviceId: {type: Number, required: true},
    desc: {type: String, required: true},
    createdAT: {type: Date, default: Date.now}
});

module.exports = new mongoose.model('Event', EventSchema, 'event');


