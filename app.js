var createError = require('http-errors');
var express = require('express');
var path = require('path'); //用于处理目录的对象，提高开发效率
var cookieParser = require('cookie-parser'); //加载cookie模块，用于获取web浏览器发送的cookie中的内容
var logger = require('morgan'); //在控制台中，显示req请求的信息

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var booksRouter = require('./routes/books');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var homeRouter = require('./routes/home');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev')); //加载日志中间件，定义日志和输出级别
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser()); //加载解析cookie的中间件
app.use(express.static(path.join(__dirname, 'public'))); //静态文件目录设置,设置public文件夹为存放静态文件的目录

//路由控制器
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/home', homeRouter);

// 捕获404错误，并转发到错误处理器
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
