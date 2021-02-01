var express = require('express');
var router = express.Router();
let donationsController = require('../controllers/donationsController')

router.get('/', donationsController.donationsMain);

module.exports = router;