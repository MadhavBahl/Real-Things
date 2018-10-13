var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('dashboard.hbs', {
		name: 'Madhav',
		username: 'User1'
	});
});

module.exports = router;
