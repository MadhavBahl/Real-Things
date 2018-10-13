var express = require('express');
var router = express.Router();

const {addUser} = require('./../serverFiles/addUser');
// const {countUsers} require('./../serverFiles/countUsers');
var {User} = require('./../models/userSchema');

/* GET users listing. */
router.get ('/', function (req, res, next) {
	res.send('respond with a resource');
});

router.get ('/numUsers', (req, res) => {
	User.count({})
		.then (numUsers => {
			res.send(`${numUsers}`);	
		});
	
});

router.post ('/register', (req, res) => {
	console.log('User to be added:', req.body);

	User.count({})
		.then (numUsers => {
			numUsers++;
			req.body.username = 'user' + numUsers;
			addUser (req.body, (err, result) => {
				if (err) {
					return res.status(404).send(err);
				}

				res.render('dashboard.hbs', {
					name: result.name,
					username: result.username
				});
			});
		});

	
});

router.get ('/test', (req, res) => {
	res.render ('fbData.hbs');
});

module.exports = router;
