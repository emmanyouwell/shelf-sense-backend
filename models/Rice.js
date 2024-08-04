const mongoose = require('mongoose')

const riceSchema = new mongoose.Schema({
    amount: {
        type: Number,
        default: 0,
        required: [true, 'Please enter the amount of rice']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Rice', riceSchema);