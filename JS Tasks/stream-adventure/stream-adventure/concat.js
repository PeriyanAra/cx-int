var concat = require('concat-stream');

var concatStream = concat(function (buffer) {
    process.stdout.write(buffer.toString().split('').reverse().join(''));
    process.stdout.write('\n');
})

process.stdin
    .pipe(concatStream)