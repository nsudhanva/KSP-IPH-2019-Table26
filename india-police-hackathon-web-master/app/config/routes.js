const express = require('express');
const router = express.Router();

const { areaRouter } = require('../controllers/area-controller');
const { usersRouter } = require('../controllers/user-controller');
const { RowdySheeterRouter } = require('../controllers/rowdy-sheeter-controller');
const { policeRouter } = require('../controllers/police-controller');
const { beatRouter } = require('../controllers/beat-controller');
const { alertRouter } = require('../controllers/alert-controller');
const { validationRouter } = require('../controllers/validation-controller');

router.use('/api/area', areaRouter);
router.use('/api/users', usersRouter);
router.use('/api/rowdySheeters', RowdySheeterRouter);
router.use('/api/police', policeRouter);
router.use('/api/beat', beatRouter);
router.use('/api/alert', alertRouter);
router.use('/api/validation', validationRouter);

// console.log('router in routes', router);

module.exports = {
	router
};
