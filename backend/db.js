var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var fs = require('fs'); //json 파일로 따로 저장!


var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rlaehdgus',
    database: 'dbtoon'
})

conn.connect();

var webtoondata = conn.query(`select * from webtoon order by ID`, function (err, row, fields) {
    if (err) {
        throw err;
    }

    fs.writeFile('webtoon.json', JSON.stringify(row), function (err) {
        if (err) {
            throw err;
        }
        else {
            console.log('saved complete!');
        }
    })
    conn.end();
})