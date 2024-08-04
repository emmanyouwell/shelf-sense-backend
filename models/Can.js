const mongoose = require('mongoose')

const canSchema = new mongoose.Schema({
    count: {
        type: Number,
        default: 0
    },
    slot1: {
        type: Boolean,
        required: [true, 'Please enter slot 1 status'],
        default: false
    },
    slot2: {
        type: Boolean,
        required: [true, 'Please enter slot 2 status'],
        default: false
    },
    slot3: {
        type: Boolean,
        required: [true, 'Please enter slot 3 status'],
        default: false
    },
    slot4: {
        type: Boolean,
        required: [true, 'Please enter slot 4 status'],
        default: false
    },
    slot5: {
        type: Boolean,
        required: [true, 'Please enter slot 5 status'],
        default: false
    },
    slot6: {
        type: Boolean,
        required: [true, 'Please enter slot 6 status'],
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Cans', canSchema);