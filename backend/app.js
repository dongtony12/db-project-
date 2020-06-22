var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mysql = require('mysql'); //mysql 연동
//router index
var indexRouter = require('./routes/index');
var webtoonsRouter = require('./routes/webtoon');
var usersRouter = require('./routes/users');

var app = express();

app.use(require('connect-history-api-fallback')()); //vue router 와 express 연동위해 추가

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rlaehdgus',
  database: 'dbtoon'
});
connection.connect(function (err) {
  if (err) {
    console.error('mysql connection error');
    console.error(err);
    throw err;
  }
  console.log("connect!");

});
// mysql db 연결
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/webtoon', webtoonsRouter);
app.use('/api/users/signUp', usersRouter);
app.use('/api/users/login', usersRouter);

// app.use(function (req, res, next) {
//   req.conn = connection;
//   next();
// }) //mysql 전역 사용 

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// var sql = "INSERT INTO user (userid,name,password) VALUES ('dongtony','김동현','rlaehdgus1')";
// var qr = connection.query(sql, function (err, result) {
//   if (err) {
//     console.error(err);
//     throw err;
//   }
// });
// console.log(qr);

// app.post('/webtoon/:id', (req, res) => {
//   console.log(req.body);

// })
app.post('/regist', (req, res) => {
  console.log(req.body);

  var user = {
    'userid': req.body.userid,
    'name': req.body.name,
    'address': req.body.address
  };
  connection.query('insert into users values ?', user, function (err, result) {
    if (err) {
      console.error(err);
      throw err;
    }
    res.status(200).send('success');
  });
});

module.exports = app;
