var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function (req, res, next) {
	res.render ('index.hbs');
});

router.get ('/', function (req, res, next) {
	res.render ('testNot.hbs');
});

module.exports = router;
