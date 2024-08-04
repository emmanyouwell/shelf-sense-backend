const mongoose = require('mongoose')

const bottleSchema = new mongoose.Schema({
    amount: {
        type: Number,
        default: 0.0,
        required: [true, 'Please enter the amount of oil']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Bottles', bottleSchema);