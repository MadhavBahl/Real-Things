var {mongoose} = require('./mongoose');
var {User} = require('./../models/userSchema');

var addUser = (userObj, callback) => {
    var user = new User(userObj);
    user.save().then((doc) => {
        console.log(doc);
        return callback(undefined, doc);
    }, (e) => {
        return callback(e);
    });
};

module.exports = {addUser};