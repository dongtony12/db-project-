var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var webtoonsRouter = require('./routes/webtoon');  // vue에 데이터를 전달할 테스트 라우터
//var usersRouter = require('./routes/users');

var mysql = require('mysql'); //mysql 연동

var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
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

var app = express();

app.use(require('connect-history-api-fallback')()); //vue router 와 express 연동위해 추가


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/webtoon', webtoonsRouter);
//app.use('/users', usersRouter);

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

module.exports = app;
