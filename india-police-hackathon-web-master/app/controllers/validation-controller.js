const express = require('express');
const { Validation } = require('../models/validation-model');
const { Police } = require('../models/police-model');
const { Beat } = require('../models/beat-model');
const router = express.Router();

//TODO: validate location
router.post('/', (req, res) => {
	let isValidPolice = false;
	let isValidFingerPrint = false;
	let isValidBeat = false;
	const body = req.body;
	const validation = new Validation(body);
	const policeID = validation.policeID;
	const fingerPrintID = validation.fingerPrintID ? validation.fingerPrintID : '';
	console.log('fingerPrintID', fingerPrintID);
	console.log('policeID', policeID);
	if (!fingerPrintID || !policeID) {
		res.send('Corrupt or Incorrect input. Please try again.');
		return;
	}
	Police.findOne({ fingerPrintID: fingerPrintID })
		.then(validationResponse => {
			console.log('validationResponse id', validationResponse._id);
			if (validationResponse) {
				isValidFingerPrint = true;
			}
			if (validationResponse._id == policeID) {
				isValidPolice = true;
			}

			Beat.find({ policeOnBeat: { $in: [policeID] } })
				.then(beatResponse => {
					console.log('beatResponse', beatResponse);
					if (beatResponse.length) {
						isValidBeat = true;
					}
					let beat = beatResponse[0];
					console.log('from', beat.timing.from);
					console.log('to', beat.timing.to);
					console.log('isValidBeat', isValidBeat);
					console.log('isValidFingerPrint', isValidFingerPrint);
					console.log('isValidPolice', isValidPolice);
					if (isValidBeat && isValidFingerPrint && isValidPolice) {
						res.send('All validations passed');
						return;
					}
				})
				.catch(err => {
					res.send(err);
				});
		})
		.catch(error => {
			console.log('validation failed', error);
			res.send(error);
		});
});

module.exports = {
	validationRouter: router
};
