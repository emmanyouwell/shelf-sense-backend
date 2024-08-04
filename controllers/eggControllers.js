const Eggs = require('../models/Eggs');

exports.updateTrayStatus = async (req, res, next) => {
    const eggs = await Eggs.create(req.body);
	res.status(201).json({
		success: true,
		eggs
	})
}

exports.getLatestStatus = async(req, res, next) => {
	const status = await Eggs.findOne().sort({createdAt: -1});
	res.status(200).json({
		success: true,
		status
	})
}