var express = require('express');
var router = express.Router();

const {addUser} = require('./../serverFiles/addUser');
// const {countUsers} require('./../serverFiles/countUsers');
var {User} = require('./../models/userSchema');
const {getLogin} = require('./../serverFiles/getUser');

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

router.post ('/', function (req, res) {
	var loginObj = req.body;

	getLogin (loginObj, req.body.password, (err, result) => {
		if (err) {
			res.render('login.hbs', {error: 'Please check your credentials'});
		}
		console.log(result);
		if (result) {
			res.render ('dashboard.hbs', {name: result[0].name, username: result[0].username});
		} else {
			res.render('login.hbs', {error: 'Please check your credentials'});
		}
		
	});	
});

router.get ('/test', (req, res) => {
	res.render ('fbData.hbs');
});

module.exports = router;
