const express = require('express');
const router = express.Router();

const {getAllDevices} = require("../controllers/deviceController.js");


router.get("/device/statuses", getAllDevices);

module.exports = router;