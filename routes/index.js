var express = require('express');
var router = express.Router();
require('dotenv').config();
var request = require('request');
var unirest = require('unirest');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render ('index.hbs');
});

// router.get ('/', function (req, res, next) {
// 	res.render ('testNot.hbs');
// });

router.post('/violence', (req, res) => {
	var mobString = req.body.mobString;
	console.log(mobString);
	unirest.post(`http://api.msg91.com/api/sendhttp.php?country=91&sender=MSGIND&route=4&mobiles=${mobString}&authkey=242704A8yXSd0INO5bc24274&message=DRIVER IS VIOLENT! CALL POLICE NOW!`)
		.headers({'Accept': 'application/json'})
		.end(function (response) {
			console.log('response is: ', response.body);
			res.render('dashboard.hbs');
		});
});

router.post('/drowsy', (req, res) => {
	var mobString = req.body.mobString;
	unirest.post(`http://api.msg91.com/api/sendhttp.php?country=91&sender=MSGIND&route=4&mobiles=${mobString}&authkey=242704A8yXSd0INO5bc24274&message=HEY! The driver is feeling sleepy! TAKE ACTION NOW!!!!`)
		.headers({'Accept': 'application/json'})
		.end(function (response) {
			res.render('dashboard.hbs');
		});
});



module.exports = router;
