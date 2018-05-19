var express = require('express');
var router = express.Router();
var session = require('express-session');
var formidable = require('express-formidable');
var app = express();

// 导入MySQL模块
var mysql = require('mysql2');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/Usersql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);

app.use(formidable());
app.use(session({
  secret: 'password',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAage: 600000
  }
}))

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.user) {
    //角色权限判断，0为管理员，1为普通用户
    if (req.session.user.role == 0) {
      pool.getConnection(function(err, connection) {
        // 获取前台页面传过来的参数
        // var param = req.query || req.params;
        // 建立连接，使用学号登陆
        connection.query(userSQL.queryAll,
          function(err, result, fields) {
            res.render('adminHome', {
              title: '管理员页面',
              usersinfos: result
            });
            connection.release();
          });
      });
    } else {
      res.render('home', {
        title: '我的主页',
      });
    }
  } else {
    res.redirect('../login');
  }
});

module.exports = router;
