var http = require('http');
var async = require('async');
const url = process.argv[2];

async.reduce(['one', 'two', 'three'], 0, function(memo, item, callback) {
    
    var body = '';

    http.get(process.argv[2] + "?number=" + item, function(res){
        res.on('data', function(chunk){
            body += chunk.toString();
        });

        res.on('end', function(){
            callback(null, memo + Number(body));
        });
    }).on('error', callback);

    
}, function callback(err, result) {
    console.log(result);
});