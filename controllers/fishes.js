var Fishes = require('../models/fishes'); 
 
// List of all fishess
exports.fishes_list = async function(req, res) { 
    try{ 
        theFishes = await Fishes.find(); 
        res.send(theFishes); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific fishes. 
exports.fishes_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: fishes detail: ' + req.params.id); 
}; 
 
// Handle fishes create on POST. 
exports.fishes_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: fishes create POST'); 
}; 
 
// Handle fishes delete form on DELETE. 
exports.fishes_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: fishes delete DELETE ' + req.params.id); 
}; 
 
// Handle fishes update form on PUT. 
exports.fishes_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: fishes update PUT' + req.params.id); 
};