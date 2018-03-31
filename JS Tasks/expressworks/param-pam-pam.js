const express = require('express');
const app = express();
const port = process.argv[2];



app.get('/search', function(req, res) {
    console.log(req.query);
    res.end()
})

app.listen(port)