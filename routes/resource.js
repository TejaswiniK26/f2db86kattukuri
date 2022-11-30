var express = require('express');
var router = express.Router();

// Require controller modules. 
var api_controller = require('../controllers/api');
var fishes_controller = require('../controllers/fishes');

/// API ROUTE /// 

// GET resources base. 
router.get('/', api_controller.api);

/// Fishes ROUTES /// 

// POST request for creating a Fishes.  
router.post('/fishes', fishes_controller.fishes_create_post);

// DELETE request to delete Fishes. 
router.delete('/fishes/:id', fishes_controller.fishes_delete);

// PUT request to update Fishes. 
router.put('/fishes/:id', fishes_controller.fishes_update_put);

// GET request for one Fishes. 
router.get('/fishes/:id', fishes_controller.fishes_detail);

// GET request for list of all Fishes items. 
router.get('/fishes', fishes_controller.fishes_list);

module.exports = router; 