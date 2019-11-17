const express = require('express');
const { Beat } = require('../models/beat-model');
const { Police } = require('../models/police-model');
const { RowdySheeter } = require('../models/rowdy-sheeter-model');
const { Area } = require('../models/area-model');
const router = express.Router();

router.get('/counts', (req, res) => {
	Promise.all([
		Beat.countDocuments({}, (err, count) => {}),
		Area.countDocuments({}, (err, count) => {}),
		RowdySheeter.countDocuments({}, (err, count) => {}),
		Police.countDocuments({}, (err, count) => {})
	])
		.then(value => {
			console.log(value);
			res.status(200).send(value);
		})
		.catch(error => {
			res.send(error);
		});
});

router.post('/', (req, res) => {
	const body = req.body;
	const beat = new Beat(body);
	beat.save()
		.then(beat => {
			console.log('beat saved', beat);
			res.send(beat);
		})
		.catch(error => {
			console.log('beat save failed', error);
			res.send(error);
		});
});

router.get('/', (req, res) => {
	Beat.find()
		.then(beat => {
			res.send(beat);
		})
		.catch(err => {
			res.send(err);
		});
});

router.get('/:id', async (req, res) => {
	let id = req.params.id ? req.params.id : '';
	Beat.findById(id)
		.populate({ path: 'policeOnBeat', model: 'Police' })
		.populate({ path: 'rowdiestoBeChecked', model: 'RowdySheeter' })
		.populate({ path: 'area', model: 'Area' })
		.then(beat => {
			res.send(beat);
		})
		.catch(err => {
			res.send(err);
		});
});

router.put('/:id', (req, res) => {
	let _id = req.params.id;
	let body = req.body;
	Beat.findOneAndUpdate({ _id: _id }, { $set: body }, { new: true })
		.then(beat => {
			console.log('beat after save', beat);
			res.send(beat);
		})
		.catch(err => {
			res.send(err);
		});
});

module.exports = {
	beatRouter: router
};
