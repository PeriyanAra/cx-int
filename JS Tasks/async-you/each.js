var http = require('http')
var async = require('async');
var fs = require('fs');


async.each([process.argv[2], process.argv[3]], function(url, done){
    var req = http.request(url, function(res){
        res.on('data', function(chunk){
        });
        res.on('end', function(){
            return done();
        });
    });
    req.end();
},
function(err){
    if (err) console.log(err);
});