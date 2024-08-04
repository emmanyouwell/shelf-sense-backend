const Barcode = require('../models/QR.js'); // Adjust the path as necessary

exports.createBarcode = async (req, res) => {
    try {
        const { barcode, productName, expirationDate } = req.body;
        const newBarcode = await Barcode.create({
            barcode,
            productName,
            expirationDate
        });

        res.status(201).json({
            status: 'success',
            data: {
                barcode: newBarcode
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

exports.checkBarcode = async (req, res) => {
    try {
        const { barcode } = req.params; // Assuming barcode is passed as a URL parameter
        const barcodeExists = await Barcode.findOne({ barcode });

        if (barcodeExists) {
            res.status(200).json({
                status: 'success',
                message: 'Barcode exists in the database.',
                data: {
                    barcode: barcodeExists
                }
            });
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'Barcode does not exist in the database.'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

exports.getAllItems = async (req, res) => {
    const items = await Barcode.find();
    res.status(200).json({
        status: 'success',
        items
    });
}

exports.deleteItem = async (req, res) => {
    try {
        const { id } = req.params; // Assuming barcode is passed as a URL parameter
        const item = await Barcode.findOneAndDelete({ barcode: id });

        if (!item) {
            return res.status(404).json({
                status: 'fail',
                message: 'Item not found with the provided barcode.'
            });
        }

        res.status(204).json({
            status: 'success',
            message: 'Item successfully deleted.',
            data: null // No data to return for a delete operation
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

