const Device = require('../models/Devices'); // Make sure to import your Device model

exports.loginDevice = async (req, res) => {
    try {
        const { name, ip_address } = req.body;
        const deviceID = req.params.id;
        // Check if the device already exists in the database
        let device = await Device.findOne({ deviceID });

        if (device) {
            // If the device exists, update its status to "Online"
            device.status = 'Online';
            device.updatedAt = Date.now();
            await device.save();
        } else {
            // If the device does not exist, create a new device entry
            device = await Device.create({
                name,
                status: 'Online',
                ip_address,
                device_id: deviceID,
                createdAt: Date.now(),
                updatedAt: Date.now(),
            });
        }

        res.status(201).json({
            status: 'success',
            data: {
                device
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

exports.healthCheck = async (req, res) => {
    try {
        const esp32Addresses = ['http://esp32-1.local/status', 'http://esp32-2.local/status'];
        const statuses = {};

        for (const addr of esp32Addresses) {
            try {
                const response = await fetch(addr);
                const text = await response.text();
                console.log(`Response Text: ${text}`);
                if (response.ok) {
                    statuses[addr] = 'Online';
                } else {
                    statuses[addr] = 'Offline';
                }
            } catch (err){
                console.log(err);
                statuses[addr] = 'Offline';
            }

            // Update the MongoDB database
            await Device.findOneAndUpdate(
                { ip_address: addr },
                { status: statuses[addr], lastChecked: new Date() },
                { upsert: true }
            );
        }

        res.status(200).json(statuses);
    } catch (error) {
        res.status(500).send('Error checking status');
    }
}

exports.getAllDevices = async (req, res) => {
    try {
        const devices = await Device.find();
        res.status(200).json({
            status: 'success',
            data: {
                devices
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
}