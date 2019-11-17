const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alertSchema = new Schema({
	location: { type: Object },
	priority: { type: String }
});

const Alert = mongoose.model('Alert', alertSchema);

module.exports = {
	Alert
};
