const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rowdySheeterSchema = new Schema({
	name: { type: String },
	area: { type: String, ref: 'Area' },
	adress: { type: Object },
	active: { type: Boolean },
	priority: { type: String },
	age: { type: Number }
});

const RowdySheeter = mongoose.model('RowdySheeter', rowdySheeterSchema);

module.exports = {
	RowdySheeter
};
