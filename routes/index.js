var express = require('express');                                          // calling express function
var router = express.Router();                                            // handling all the routings

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
