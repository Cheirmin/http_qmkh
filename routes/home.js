var express = require('express');
var router = express.Router();
var session = require('express-session');
var formidable = require('express-formidable');
var app = express();

// 导入MySQL模块
var mysql = require('mysql2');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/UserSql');
var bookSQL = require('../db/BookSql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);

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
              username: req.session.user.name,
              usersinfos: result
            });
            connection.release();
          });
      });
    } else {
      pool.getConnection(function(err, connection) {
        // 获取前台页面传过来的参数
        // var param = req.query || req.params;
        // 建立连接，使用学号登陆
        connection.query(bookSQL.getBookById, [req.session.user.mylend],
          function(
            err, result, fields) {
            if (result.length != 1) {
              console.log("result.length != 1");
              res.render('home', {
                title: '我的主页',
                username: req.session.user.name,
                mylendinfos1: '你当前还没有借阅任何书籍',
                mylendinfos2: null,
                mylendinfos3: null,
              });
            } else {
              res.render('home', {
                title: '我的主页',
                username: req.session.user.name,
                mylendinfos1: result[0].book_name,
                mylendinfos2: result[0].book_id,
                mylendinfos3: result[0].lend_time,
              });
            }
            connection.release();
          });
      });
    }
  } else {
    res.redirect('../login');
  }
});

module.exports = router;
