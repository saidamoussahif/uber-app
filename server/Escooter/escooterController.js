const Escooter = require('./escooterSchema');

const addEscooter = async (req, res) => {
	const { latitude, longitude, brand } = req.body;
	try {
		const newEscooter = new Escooter({
			latitude,
			longitude,
			brand,
		});
		const escooter = await newEscooter.save();
		res.status(200).json(escooter);
	}
	catch (err) {
		console.log(err);
	}
};

const getEscooters = async (req, res) => {
	try {
		const escooters = await Escooter.find();
		res.status(200).json(escooters);
	}
	catch (err) {
		console.log(err);
	}
}

module.exports = {
	addEscooter,
	getEscooters,
};