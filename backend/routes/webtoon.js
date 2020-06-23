var express = require('express');
var router = express.Router();
var webtoon = require('../webtoon.json');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rlaehdgus',
    database: 'dbtoon'
})

connection.connect();


router.get('/', function (req, res, next) {

    res.send(webtoon)
    console.log(req.body.webtoon);



});

router.get('/:id', function (req, res, next) {


    var id = parseInt(req.params.id, 10);
    console.log("dbtoon show id:" + id);
    var toon = webtoon.filter(function (toon) {
        return toon.id === id
    });
    console.log(toon);




    res.send(toon);

});

router.get('/:id', (req, res, next) => {
    connection.query(`update webtoon set webtoon.like= '${webtoon.like + 1}' where='${webtoon.id}'`, (err, row) => {
        if (err) throw err;

    })
})



module.exports = router;