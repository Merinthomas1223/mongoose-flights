const express = require('express');
const router = express.Router();

//create controller module
const flightsCtrl = require('../controllers/flights');

// GET /flights/new

router.get('/',flightsCtrl.index);

router.get('/new', flightsCtrl.new);

//get id
router.get('/:id', flightsCtrl.show);

router.post('/', flightsCtrl.create);

module.exports = router;
