const http = require('http');
const request = require('request');
const myUrl = 'http://localhost:8099';

const options = {
    method: 'POST',
    uri: myUrl
}

process.stdin.pipe(request(options)).pipe(process.stdout);