const express = require('express');
const { Alert } = require('../models/alert-model');
const server = require('http').createServer();
const io = require('socket.io')(server);
const router = express.Router();

router.post('/', (req, res) => {
	const body = req.body;
	const alert = new Alert(body);
	alert
		.save()
		.then(alert => {
			console.log('alert saved', alert);
			io.on('alert', socket => {
				const { id } = socket.client;
				console.log(`User connected: ${id}`);
				socket.on('announce', input => {
					socket.broadcast.emit('announce', 'Alert!');
				});
			});
			res.send(alert);
		})
		.catch(error => {
			console.log('alert save failed', error);

			res.send(error);
		});
});

router.get('/', (req, res) => {
	Alert.find()
		.then(alerts => {
			res.send(alerts);
		})
		.catch(err => {
			res.send(err);
		});
});

router.put('/:id', (req, res) => {
	let _id = req.params.id;
	let body = req.body;
	Alert.findOneAndUpdate({ _id: _id }, { $set: body }, { new: true })
		.then(alert => {
			console.log('alert after save', alert);
			res.send(alert);
		})
		.catch(err => {
			res.send(err);
		});
});

router.delete('/:id', (req, res) => {
	let _id = req.params.id;
	Alert.findByIdAndRemove(_id)
		.then(alert => {
			res.send(alert);
		})
		.catch(err => {
			console.log(err);
		});
});

module.exports = {
	alertRouter: router
};
