var express = require('express');
var router = express.Router();

// 导入MySQL模块
var mysql = require('mysql2');
var dbConfig = require('../db/DBConfig');
var bookSQL = require('../db/Booksql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
// 响应一个JSON数据
var responseJSON = function(res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '-200',
      msg: '操作失败',
    });
  } else {
    res.json(ret);
  }
};
// 添加书本
router.get('/addBook', function(req, res, next) {
  // 从连接池获取连接
  pool.getConnection(function(err, connection) {
    // 获取前台页面传过来的参数
    var param = req.query || req.params;

    // 建立连接 增加一个用户信息
    connection.query(bookSQL.insert, [param.id, param.name, param.summary,
        param.kind_id
      ],
      function(
        err, result) {
        if (result) {
          result = {
            code: 200,
            msg: '增加成功',
          };
        }
        // 以json形式，把操作结果返回给前台页面
        responseJSON(res, result);
        // 释放连接
        connection.release();

      });
  });
});

router.get('/getBookInfo', function(req, res, next) {
  if (req.session.user) {
    // 从连接池获取连接
    pool.getConnection(function(err, connection) {
      // 获取前台页面传过来的参数
      var param = req.query || req.params;
      // 建立连接，使用学号登陆
      connection.query(bookSQL.getBookById, [param.id],
        function(err, result) {
          if (result.length == 1) {
            if (err) {
              return res.render('errorMessages.ejs', {
                title: '获取图书信息失败！',
                message: '原因:',
                error: err
              });
            } else {
              return res.render('updateBook', {
                user: result[0]
              });
            }
          } else {
            return res.render('message.ejs', {
              title: '获取图书信息失败！',
              message: '原因:',
              detail: '获取用户显示不存在!'
            });
          }
          // 释放连接
          connection.release();
        });
    });
  } else {
    res.redirect('../login');
  }
});

router.get('/getAllBookInfo', function(req, res, next) {
  if (req.session.user) {
    //角色权限判断，0为管理员，1为普通用户
    if (req.session.user.role == 1) {
      pool.getConnection(function(err, connection) {
        // 获取前台页面传过来的参数
        // var param = req.query || req.params;
        // 建立连接，使用学号登陆
        connection.query(bookSQL.queryAll,
          function(err, result, fields) {
            res.render('home1', {
              title: '我的主页',
              username: req.session.user.name,
              booksinfo: result
            });
            connection.release();
          });
      });
    }
  }
});

module.exports = router;
