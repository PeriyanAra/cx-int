const express = require('express');
const app = express();
const port = process.argv[2];



app.get('/search', function(req, res) {
    var result = req.query;
    res.send(result);
})

app.listen(port)