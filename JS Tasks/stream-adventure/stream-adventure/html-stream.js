const trumpet = require('trumpet');
const through = require('through');
const tr = trumpet();


var stream = tr.select('.loud').createStream();

stream.pipe(through(function (buf) {
    this.queue(buf.toString().toUpperCase());
})).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);