const Cans = require('../models/Can');

exports.updateTrayStatus = async (req, res, next) => {
    const cans = await Cans.create(req.body);
	res.status(201).json({
		success: true,
		cans
	})
}

exports.getLatestStatus = async(req, res, next) => {
	const status = await Cans.findOne().sort({createdAt: -1});
	res.status(200).json({
		success: true,
		status
	})
}