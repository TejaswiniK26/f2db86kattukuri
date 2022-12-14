const fishes = require('../models/fishes');
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
        result = await Fishes.findById( req.params.id) 
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
exports.fishes_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
try { 
    result = await fishes.findByIdAndDelete( req.params.id) 
    console.log("Removed " + result) 
    res.send(result) 
  } catch (err) { 
    res.status(500) 
    res.send(`{"error": Error deleting ${err}}`); 
  } 
}; 
 
// Handle fishes update form on PUT. 
exports.fishes_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Fishes.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Fish_Name)  
               toUpdate.Fish_Name = req.body.Fish_Name; 
        if(req.body.country) toUpdate.country = req.body.country; 
        if(req.body.price) toUpdate.price = req.body.price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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

// Handle a show one view with id specified by query 
exports.fishes_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await fishes.findById( req.query.id) 
        res.render('fishesdetail',  
{ title: 'fishes Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 // Handle building the view for creating a fishes. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.fishes_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('fishescreate', { title: 'fishes Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a fishes. 
// query provides the id 
exports.fishes_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await fishes.findById(req.query.id) 
        res.render('fishesupdate', { title: 'fishes Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.fishes_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await fishes.findById(req.query.id) 
        res.render('fishesdelete', { title: 'fishes Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 