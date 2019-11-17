const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beatSchema = new Schema({
	area: [{ type: String, ref: 'Area' }],
	code: { type: String },
	timing: { from: { type: String }, to: { type: String } },
	sensitiveBodies: [{ name: String, location: { latitude: Number, longitude: Number } }],
	active: { type: Boolean },
	priority: { type: String },
	nearByPoliceStations: [{ name: String }],
	policeOnBeat: [{ type: String, ref: 'Police' }],
	rowdiestoBeChecked: [{ type: String, ref: 'RowdySheeter' }],
	rowdiesChecked: [{ type: String, ref: 'RowdySheeter' }],
	isCompleted: { type: Boolean },
	description: { type: String }
});

const Beat = mongoose.model('Beat', beatSchema);

module.exports = {
	Beat
};
