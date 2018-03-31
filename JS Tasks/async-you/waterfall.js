var http = require('http')
var async = require('async');
var fs = require('fs');

async.waterfall([
    
    function(callback){
        var body ;        

        http.get({path: process.argv[2]}, function(res){
            
            res.on('data', function(chunk) {
                fs.readFile(process.argv[2], function(err, data) {
                    callback(null, data);
                });
            });

        }).on('error', function(err) {
            callback(err);
        });

    },

    function(body, callback){
        
        http.get(body.toString(), function(res){
            let str = '';
            res.on('data', function(chunk) {
                //console.log();
                str += chunk;
            });

            res.on('end', function(){
                console.log(str);
            })

        }).on('error', function(err) {
            callback(err);
        });
    }

], function(err, result){

    if (err) return console.error(err);
    console.log(result);

});