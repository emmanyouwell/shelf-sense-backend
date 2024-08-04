const express = require('express');
const router = express.Router();

const {loginDevice, healthCheck, getAllDevices} = require("../controllers/deviceController.js");

router.post("/device/login/:id", loginDevice);
router.get("/device/statuses", getAllDevices);
router.get("/device/update-status", healthCheck);
module.exports = router;