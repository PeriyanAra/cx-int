const express = require('express');
const app = express();
const port = process.argv[2];
const file = process.argv[3];

app.set('view engine', 'pug');
app.set('views', file);
app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()})
  })

app.listen(port)