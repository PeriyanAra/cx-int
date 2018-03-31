const express = require('express');
const app = express();
const port = process.argv[2];
app.use(require('stylus').middleware(process.argv[3]));
app.use(require('stylus').middleware('public'))


app.post('/form', function(req, res) {
    res.end(file);
})

app.listen(port)