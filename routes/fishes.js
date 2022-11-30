var express = require('express');
const fishes_controller = require('../controllers/fishes');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
// or
// redirect to login. 
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET costumes */
router.get('/', fishes_controller.fishes_view_all_Page);

/* GET detail fishes page */
router.get('/detail', fishes_controller.fishes_view_one_Page);

/* GET create fishes page */
router.get('/create', fishes_controller.fishes_create_Page);

/* GET create update page */
router.get('/update', secured, fishes_controller.fishes_update_Page);

/* GET delete fishes page */
router.get('/delete', fishes_controller.fishes_delete_Page);

module.exports = router;
