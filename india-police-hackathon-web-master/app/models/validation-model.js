const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validationSchema = new Schema({
	policeID: { type: String },
	fingerPrintID: { type: String },
	location: { latitude: String, longitude: String }
});

const Validation = mongoose.model('Validation', validationSchema);

module.exports = {
	Validation
};
