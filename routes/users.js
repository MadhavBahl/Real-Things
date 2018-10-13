var express = require('express');
var router = express.Router();

const {addUser} = require('./../serverFiles/addUser');

/* GET users listing. */
router.get ('/', function (req, res, next) {
	res.send('respond with a resource');
});

router.post ('/register', (req, res) => {
	console.log('User to be added:', req.body);
	addUser (req.body, (err, result) => {
		if (err) {
			return res.status(404).send(err);
		}

		res.send('<h1>Data Saved!</h1>')
	});
});

router.get ('/test', (req, res) => {
	res.render ('fbData.hbs');
});

module.exports = router;
