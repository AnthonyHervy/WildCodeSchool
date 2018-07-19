// server.js
// load the things we need
const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'tmp/' });
const fs = require('fs');
app.use(express.limit('4M'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// upload

const upFiles = multer({ storage : storage }).array('monfichier',2);

app.post('/monupload', upload.array('monfichier'), (req, res, next) => {
console.log(req.files);
upFiles(req,res,function(err) {
    //console.log(req.body);
    //console.log(req.files);
    if(err) {
        return res.end("Error uploading file.");
    }
    res.end("File is uploaded");


// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');