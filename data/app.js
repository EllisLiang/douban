var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var api = require('./routes/api');

// 引入
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var customName = 'userName';


var app = express();

// 服务器设置响应头 跨域行为 自定义中间件
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);

// 设置session配置文件
app.use(session({
  name: customName,
  secret: 'name',   //用来对session  id相关的cookie进行命名
  store:new FileStore(),    //本地存储session（文本文件，也可以选择其他的store）
  saveUninitialized:false,    //是否自动保存为初始化的会话，建议false
  resave:false,   //是否每次都重新保存会话，建议false
  cookie: {
    maxAge: 10 * 1000  //设置有效期，单位为毫秒
  }
}))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
