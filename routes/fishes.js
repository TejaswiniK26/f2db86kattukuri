var express = require('express');
const fishes_controlers= require('../controllers/fishes'); 
var router = express.Router();

/* GET costumes */ 
router.get('/', fishes_controlers.fishes_view_all_Page ); 

module.exports = router;
