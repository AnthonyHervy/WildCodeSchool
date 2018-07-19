var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hey ! It\'s a GET');
});

/* GET user with ID. */
router.get('/:id(\\d+)', function(req, res, next) {
  res.send('Hey ! It\'s a GET with ID ' + req.params.id);
});

/* POST user creation. */
router.post('/', function(req, res, next) {
  res.send('Hey ! It\'s a POST');
});

// PUT user 
router.put('/:prenom', function(req, res, next) { 
  res.send('Hey my name is ' + req.params.prenom); 
  }); 

// DELETE user
router.delete('/:id(\\d+)', function(req, res, next) { 
  res.send('Hey it\'s a DELETE ID ' + req.params.id); 
  });

module.exports = router;