var http = require('http');
var async = require('async');
const url = process.argv[2];

var count = 0;
var feedback = '';
async.whilst(
    function () { return feedback.trim() != 'meerkat'; },//check condition.
    function (callback) {
        
        http.get(url, function(res){
            
            res.on('data', function(chunk){
                feedback = chunk.toString();
            });
        
            res.on('end', function(){
                count++;
                callback(null, count);
            });
        });

    },
    function (err, n) {
        console.log(n);
    }    
);

