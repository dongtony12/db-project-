var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  //res.render('index', { title: 'Express' }); 기존코드
  console.log("========무비 인덱스===========");
  res.send(movies);
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
});

module.exports = router;

