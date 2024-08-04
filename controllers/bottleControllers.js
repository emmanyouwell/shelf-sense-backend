const Bottles = require('../models/Bottle');

exports.updateBottleStatus = async (req, res, next) => {
    const bottles = await Bottles.create(req.body);
	res.status(201).json({
		success: true,
		bottles
	})
}

exports.getLatestStatus = async(req, res, next) => {
	const status = await Bottles.findOne().sort({createdAt: -1});
	res.status(200).json({
		success: true,
		status
	})
}