var fs = require('fs');
var through = require('through');

var change = function (buffer) {
    this.queue(buffer.toString().toUpperCase())
}

process.stdin
    .pipe(through(change))
    .pipe(process.stdout)
