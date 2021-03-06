
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');


var mysql = require('mysql'); //mysql 연동

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rlaehdgus',
  database: 'dbtoon'
});
connection.connect();


router.post('/signup', function (req, res) {
  const user = {
    'userid': req.body.user.userid,
    'name': req.body.user.name,
    'password': req.body.user.password
  };


  connection.query(`SELECT userid FROM user WHERE userid = '${user.userid}'`, function (err, row) {


    if (row[0] == undefined) { //  동일한 아이디가 없을경우,
      const salt = bcrypt.genSaltSync();
      const encryptedPassword = bcrypt.hashSync(user.password, salt);
      connection.query(`INSERT INTO user (userid,name,password) VALUES ('${user.userid}','${user.name}','${encryptedPassword}')`, user, function (err, row2) {
        if (err) throw err;
      });
      res.json({
        success: true,
        message: 'Sign Up Success!'
      })
    }
    else {
      res.json({
        success: false,
        message: 'Sign Up Failed Please use anoter ID'
      })
    }
  });
});

router.post('/login', (req, res) => {
  const user = {
    'userid': req.body.user.userid,
    'password': req.body.user.password
  };


  connection.query(`SELECT userid, password FROM user WHERE userid = '${user.userid} '`, function (err, row) {
    if (err) {
      res.json({ // 매칭되는 아이디 없을 경우
        success: false,
        message: 'Login failed please check your id'
      })
    }

    if (row[0] != undefined && row[0].userid == user.userid) {
      console.log(user.password);
      console.log(row[0].password);

      bcrypt.compare(user.password, row[0].password, (err, res2) => {
        console.log(res2);

        if (res2) {
          res.json({ // 로그인 성공 
            success: true,
            message: 'Login successful!'
          })
        }
        else {
          res.json({ // 매칭되는 아이디는 있으나, 비밀번호가 틀린 경우            
            success: false,
            message: 'Login failed please check your password!'
          })
        }
      })
    }
  })
});

router.get('/userlist', (req, res) => {
  connection.query('SELECT * FROM user order by user.num desc', (err, rows) => {
    console.log(rows);

    if (err) throw err;
    res.send(rows);
  });
});

module.exports = router;
