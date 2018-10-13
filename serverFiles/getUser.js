const {mongoose} = require('./mongoose');
const {User} = require('./../models/userSchema');

const getLogin = (loginObj, password, callback) => {
    User.find({ email: loginObj.email}, (err, docs) => {
        if (err) {
            return callback(err);
        }
        // callback(undefined, docs);

        console.log(docs);
        if (docs) {
            if (docs[0].password === password) {
                callback (undefined, docs);
            } else { 
                callback ('EROORR');
            }
        } else {
            callback ('ERRORR');
        }
        
    });
};

module.exports = {getLogin};