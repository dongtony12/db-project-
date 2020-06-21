
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rlaehdgus',
  database: 'dbtoon'
})

router.post('/signUp', function (req, res) {
  const user = {
    'user_id': req.body.user.userid,
    'user_password': req.body.user.password,
    'user_age': req.body.user.age
  };
  connection.query('SELECT user_id FROM user WHERE user_id = "' + user.userid + '"', function (err, row) {
    if (row[0] == undefined) { //  동일한 아이디가 없을경우,
      const salt = bcrypt.genSaltSync();
      const encryptedPassword = bcrypt.hashSync(user.password, salt);
      connection.query('INSERT INTO user (user_id,user_password,user_age) VALUES ("' + user.userid + '","' + encryptedPassword + '","' + user.age + '")', user, function (err, row2) {
        if (err) throw err;
      });
      res.json({
        success: true,
        message: 'Sing Up Success!'
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

module.exports = router;
