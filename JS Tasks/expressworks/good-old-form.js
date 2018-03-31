const express = require('express');
const app = express();
const port = process.argv[2];
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))


app.post('/form', function(req, res) {
    var file = req.body.str.split('').reverse().join('');

    res.end(file);
})

app.listen(port)