const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const areaSchema = new Schema({
	name: { type: String },
	location: [{ latitude: String, longitude: String }],
	areaCode: { type: String },
	address: { type: Object },
	sensitiveBodies: [{ type: String }],
	priority: { type: String },
	population: { type: Number }
});

const Area = mongoose.model('Area', areaSchema);

module.exports = {
	Area
};
