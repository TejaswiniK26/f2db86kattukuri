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
exports.fishes_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await fishes.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle fishes create on POST.
exports.fishes_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Fishes();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Fish_Name":"King Fish", "country":"UK", "price":340} 
    document.Fish_Name = req.body.Fish_Name;
    document.country = req.body.country;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
 
// Handle fishes delete form on DELETE. 
exports.fishes_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: fishes delete DELETE ' + req.params.id); 
}; 
 
// Handle fishes update form on PUT. 
exports.fishes_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: fishes update PUT' + req.params.id); 
};

// VIEWS 
// Handle a show all view 
exports.fishes_view_all_Page = async function(req, res) { 
    try{ 
        theFishes = await Fishes.find(); 
        res.render('Fishes', { title: 'Fishes Search Results', results: theFishes }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 