const express = require('express');
const router = express.Router();

const {updateBottleStatus, getLatestStatus} = require("../controllers/bottleControllers.js");

router.post('/bottle/update', updateBottleStatus);
router.get('/bottle/latest-status', getLatestStatus);
module.exports = router;