const Rice = require('../models/Rice');

exports.updateRiceStatus = async (req, res, next) => {
    const rice = await Rice.create(req.body);
	res.status(201).json({
		success: true,
		rice
	})
}

exports.getLatestStatus = async(req, res, next) => {
	const status = await Rice.findOne().sort({createdAt: -1});
	res.status(200).json({
		success: true,
		status
	})
}