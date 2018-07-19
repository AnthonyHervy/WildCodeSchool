var bodyParser = require('body-parser');

// server.js
// load the things we need
var express = require('express');
var app = express();
app.use(bodyParser.urlencoded({ extended: true })); // bodyParser
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
    console.log(req.query.maVariabmeEnGet); // retourne maValeur
    console.log(req.body.username); // retourne Bob
});

app.get('/form-:formNumber(\\d+)', (req, res) => {
    res.render('pages/index'); // "/routes/" dans la consigne, mais on réutilise le template ejs de la quete précédente
    console.log(req.params.formNumber); 
    console.log(req.query.level); 
});

app.post('/form-:formNumber(\\d+)', (req, res) => {
    res.render('pages/index');
    console.log(req.body.username); 
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');