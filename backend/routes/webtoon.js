var express = require('express');
var router = express.Router();
var webtoon = require('../webtoon.json');
var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rlaehdgus',
    database: 'dbtoon'
})

conn.connect();

var webtoondata = connection.query(`select * from webtoon`)

router.get('/', function (req, res, next) {


    res.send(webtoondata);


});

router.get('/:id', function (req, res, next) {
    var id = parseInt(req.params.id, 10);
    console.log("dbtoon show id:" + id);
    var toon = webtoon.filter(function (toon) {
        return toon.id === id
    });
    console.dir(toon);
    res.send(toon)
});

module.exports = router;