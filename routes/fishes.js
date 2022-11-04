var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fishes', { title: 'Fishes Search Results' });
});

module.exports = router;
