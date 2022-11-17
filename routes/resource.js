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

/* GET detail fishes page */ 
router.get('/detail', fishes_controller.fishes_view_one_Page); 

/* GET create fishes page */ 
router.get('/create', fishes_controller.fishes_create_Page); 

/* GET create update page */ 
router.get('/update', fishes_controller.fishes_update_Page); 

/* GET delete fishes page */ 
router.get('/delete', fishes_controller.fishes_delete_Page); 

module.exports = router; 