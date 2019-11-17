const express = require('express');
const { RowdySheeter } = require('../models/rowdy-sheeter-model');

const router = express.Router();

router.post('/', (req, res) => {
	const body = req.body;
	const rowdy = new RowdySheeter(body);
	rowdy
		.save()
		.then(rowdy => {
			console.log('rowdy saved', rowdy);
			res.send(rowdy);
		})
		.catch(error => {
			console.log('rowdy save failed', error);
			res.send(error);
		});
});

router.get('/', (req, res) => {
	console.log('req rowdy controller', req);
	RowdySheeter.find()
		.then(rowdies => {
			res.send(rowdies);
		})
		.catch(err => {
			res.send(err);
		});
});

router.put('/:id', (req, res) => {
	let _id = req.params.id;
	let body = req.body;
	RowdySheeter.findOneAndUpdate({ _id: _id }, { $set: body }, { new: true })
		.then(rowdy => {
			console.log('rowdy after save', rowdy);
			res.send(rowdy);
		})
		.catch(err => {
			res.send(err);
		});
});

router.delete('/:id', (req, res) => {
	let _id = req.params.id;
	RowdySheeter.findByIdAndRemove(_id)
		.then(deletedRowdy => {
			res.send(deletedRowdy);
		})
		.catch(err => {
			console.log(err);
		});
});

module.exports = {
	RowdySheeterRouter: router
};
