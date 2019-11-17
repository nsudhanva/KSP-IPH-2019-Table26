const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const policeSchema = new Schema({
	name: { type: String },
	area: { type: String, ref: 'Area' },
	designation: { type: String },
	serviceYear: { type: String },
	isOnBeat: { type: Boolean },
	isAvailable: { type: Boolean },
	beat: { type: String, ref: 'Beat' },
	fingerPrintID: { type: String }
});

const Police = mongoose.model('Police', policeSchema);

module.exports = {
	Police
};
