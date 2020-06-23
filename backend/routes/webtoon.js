var express = require('express');
var router = express.Router();
var webtoon = require('../webtoon.json');
const { query } = require('express');
var mysql = require('mysql'); //mysql 연동

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rlaehdgus',
    database: 'dbtoon'
});
connection.connect();

router.get('/', function (req, res, next) {

    res.send(webtoon)




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



router.post('/:id', (req, res) => {

    var id = parseInt(req.params.id, 10);


    connection.query(`select webtoon.like from webtoon where id = ${id}`, (err, row) => {
        console.log(row[0].like);
        if (err) throw err;
        connection.query(`UPDATE webtoon SET webtoon.like = ${parseInt(row[0].like, 10) + 1} where webtoon.id = ${id}`, (err, row) => {

        })
    })
    res.send("");
    // console.log("dbtoon show id:" + id);
    // var toon = webtoon.filter(function (toon) {
    //     return toon.id === id
    // });

})

router.post('/webtoonlist', (req, res) => {
    connection.query(`SELECT * FROM webtoon`, (err, rows) => {
        console.log("1");
        console.log(rows);
        if (err) throw err;
        res.send(rows);
    });
});


module.exports = router;