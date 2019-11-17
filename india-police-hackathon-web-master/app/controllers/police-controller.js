const express = require('express');
const router = express.Router();

const { Police } = require('../models/police-model');

router.post('/', function(req, res) {
	const body = req.body;
	const police = new Police(body);
	police
		.save()
		.then(function(police) {
			console.log('police created', police);
			res.send(police);
		})
		.catch(function(err) {
			res.send(err);
		});
});

router.get('/', function(req, res) {
	Police.find()
		.then(function(lakes) {
			res.send(lakes);
		})
		.catch(function(err) {
			res.send(err);
		});
});

router.put('/:id', function(req, res) {
	const body = req.body;
	const id = req.body.params;
	Police.findOneAndUpdate(id, body, { new: true })
		.then(function(police) {
			res.send(police);
		})
		.catch(function(err) {
			res.send(err);
		});
});

router.delete('/:id', function(req, res) {
	console.log(req.body.params);
	const id = req.body.params;
	Police.deleteOne(id)
		.then(function(police) {
			res.send(police);
		})
		.catch(function(err) {
			res.send(err);
		});
});

module.exports = {
	policeRouter: router
};
