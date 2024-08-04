const mongoose = require('mongoose');

const barcodeSchema = new mongoose.Schema({
    barcode: {
        type: String,
        required: [true, 'Barcode is required'],
        unique: true // Assuming each barcode is unique
    },
    productName: {
        type: String,
        required: [true, 'Product name is required']
    },
    expirationDate: {
        type: Date,
        required: [true, 'Expiration date is required'],
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Barcode', barcodeSchema);