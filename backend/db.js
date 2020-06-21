var mysql = require('mysql'); //mysql 연동

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rlaehdgus',
    database: 'dbtoon'
});// mysql db 연결

connection.connect(function (err) {
    if (err) {
        console.log(err);
        throw err;

    }
});