const express = require('express');
const router = express.Router();

const {updateRiceStatus, getLatestStatus} = require("../controllers/riceControllers");

router.post('/rice/update', updateRiceStatus);
router.get('/rice/latest-status', getLatestStatus);
module.exports = router;