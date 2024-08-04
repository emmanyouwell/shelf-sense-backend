const express = require('express');
const router = express.Router();

const {createBarcode, checkBarcode, getAllItems, deleteItem} = require("../controllers/barcodeController.js");

router.post('/barcode/save', createBarcode);
router.get('/barcode/check/:barcode', checkBarcode);
router.get('/barcode/all', getAllItems);
router.delete('/barcode/delete/:id', deleteItem)
module.exports = router;