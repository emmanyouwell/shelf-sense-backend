const express = require('express');
const router = express.Router();

const {updateTrayStatus, getLatestStatus} = require("../controllers/eggControllers");

router.post('/egg/update', updateTrayStatus);
router.get('/egg/latest-status', getLatestStatus);
module.exports = router;