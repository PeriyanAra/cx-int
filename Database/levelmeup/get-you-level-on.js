module.exports = function (databaseDir, key, callback) {
    
    const level = require('level')
    var db = level(databaseDir);
    db.get(key, function (err, val) {
        db.close(function(err2) {
            callback(err, val)
        });
    })
}