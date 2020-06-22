
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rlaehdgus',
  database: 'dbtoon'
})

connection.connect();




router.post('/signup', function (req, res) {
  const user = {
    'userid': req.body.user.userid,
    'name': req.body.user.name,
    'password': req.body.user.password
  };


  connection.query(`SELECT userid FROM user WHERE userid = '${user.userid}'`, function (err, row) {

    console.log(row);

    if (row[0] == undefined) { //  동일한 아이디가 없을경우,
      const salt = bcrypt.genSaltSync();
      const encryptedPassword = bcrypt.hashSync(user.password, salt);
      connection.query(`INSERT INTO user (userid,name,password) VALUES ('${user.userid}','${user.name}','${user.password}')`, user, function (err, row2) {
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

router.post('/login', function (req, res) {
  const user = {
    'userid': req.body.user.useruserid,
    'password': req.body.user.userpassword
  };
  connection.query(`SELECT userid, password FROM user WHERE userid = '${user.userid} '`, function (err, row) {
    if (err) {
      res.json({ // 매칭되는 아이디 없을 경우
        success: false,
        message: 'Login failed please check your id or password!'
      })
    }
    if (row[0] !== undefined && row[0].userid === user.userid) {
      bcrypt.compare(user.password, row[0].password, function (err, res2) {
        if (res2) {
          res.json({ // 로그인 성공 
            success: true,
            message: 'Login successful!'
          })
        }
        else {
          res.json({ // 매칭되는 아이디는 있으나, 비밀번호가 틀린 경우            success: false,
            message: 'Login failed please check your id or password!'
          })
        }
      })
    }
  })
});

module.exports = router;
