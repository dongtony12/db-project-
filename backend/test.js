var express = require("express");
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rlaehdgus',
    database: 'dbtoon'
});

var app = express();

connection.connect(function (err) {
    if (!err) {
        console.log("connect");

    } else {
        console.log("disconnect");

    }
});

app.get("/", function (req, res) {

})