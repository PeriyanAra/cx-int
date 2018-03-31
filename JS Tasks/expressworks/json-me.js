const express = require('express');
const fs = require('fs');
const app = express();
const port = process.argv[2];
const file = process.argv[3];



app.get('/books', function(req, res) {
    var result = fs.readFile(file, (err, data) => {
        var result = data.toString();

        res.json(JSON.parse(result))
    });

    
})

app.listen(port)