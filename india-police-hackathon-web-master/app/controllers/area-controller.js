const express = require('express');
const { Area } = require('../models/area-model');
const { RowdySheeter } = require('../models/rowdy-sheeter-model');
const { Police } = require('../models/police-model');

const router = express.Router();

router.post('/', (req, res) => {
	const body = req.body;
	const area = new Area(body);
	area.save()
		.then(area => {
			console.log('area saved', area);
			res.send(area);
		})
		.catch(error => {
			console.log('area save failed', error);
			res.send(error);
		});
});

router.get('/', (req, res) => {
	Area.find()
		.then(area => {
			res.send(area);
		})
		.catch(err => {
			res.send(err);
		});
});

router.get('/:id', async (req, res) => {
	let query = req.query;
	let id = req.params.id ? req.params.id : '';
	if (Object.keys(query).length) {
		if (!id) {
			res.send('ID was not provided!');
			return;
		}
		let key = query.key ? query.key : '';
		let active = query.active ? query.active : true;
		let model = {};
		console.log('key', key);
		console.log('id', id);
		switch (key) {
			case 'rowdy':
				model = RowdySheeter;
				break;
			case 'police':
				model = Police;
				console.log('active', active);
				break;
		}
		let entity = await findEntity(id, model, active);
		console.log('returning entity', entity);
		res.send(entity);
		return;
	}
	Area.find()
		.then(areas => {
			res.send(areas);
		})
		.catch(err => {
			res.send(err);
		});
});

function findEntity(id, model, active) {
	return new Promise((resolve, reject) => {
		model
			.find({ area: id, active: active })
			.then(entity => {
				console.log('findEntity', entity);
				return resolve(entity);
			})
			.catch(error => {
				console.log('error', error);
				return reject(error);
			});
	});
}

module.exports = {
	areaRouter: router
};
