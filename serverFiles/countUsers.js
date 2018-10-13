var {mongoose} = require('./mongoose');
var {User} = require('./../models/userSchema');

var countUsers = () => {
    return User.count({})  
};

module.exports = {countUsers};