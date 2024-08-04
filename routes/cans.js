const express = require('express');
const router = express.Router();

const {updateTrayStatus, getLatestStatus} = require("../controllers/canControllers.js");

router.post('/can/update', updateTrayStatus);
router.get('/can/latest-status', getLatestStatus);
module.exports = router;