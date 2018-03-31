var http = require('http')
var async = require('async');
var fs = require('fs');

async.series({
    requestOne: function(done){
        http.get(process.argv[2], function(res){
            let str = '';
            res.on('data', function(chunk) {
                str += chunk;
            });

            res.on('end', function(){
                done(null, str);
            })

        }).on('error', function(err) {
            done(err);
        });
    },
    requestTwo: function(done){
        http.get(process.argv[3], function(res){
            let str = '';
            res.on('data', function(chunk) {
                str += chunk;
            });

            res.on('end', function(){
                done(null, str);
            })

        }).on('error', function(err) {
            done(err);
        });
    }
}, function(err, results){
    console.log(results);
});