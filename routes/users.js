var express = require('express');
var router = express.Router();

//引入密码加密模块
// var bcrypt = require('bcryptjs');
var bcrypt = require('bcryptjs');

//validator中间键验证  ---验证注册信息用
var expressValidator = require('express-validator');
var check = require('express-validator/check').check;
var validationResult = require('express-validator/check').validationResult;

// 导入MySQL模块
var mysql = require('mysql2');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/Usersql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
// 响应一个JSON数据``
var responseJSON = function(res, ret) {
  if (typeof ret === 'undefined') {
    res.render('message.ejs', {
      title: '操作失败！',
      message: '原因:',
      detail: '同一学号无法重复注册'
    });
  } else {
    res.json(ret);
  }
};

// 添加用户，与用户信息提示,使用了validator中间件验证方法
router.get('/addUser', [check('id')
  .isInt()
  .isLength({
    min: 11,
    max: 11
  })
  .withMessage('学号长度为11位有效数字！'),
  check('name')
  .isLength({
    min: 2,
    max: 16
  })
  .withMessage('名字长度为2-16位！'),
  check('password')
  .isLength({
    min: 6,
    max: 16
  })
  .withMessage('密码长度为6-16位！'),
  check('email')
  .isEmail()
  .withMessage('请输入正确的邮箱格式！'),
], function(req, res, next) {
  //验证错误信息提示
  var errors = validationResult(req);
  if (!errors.isEmpty()) {
    //获取错误的具体信息
    var errors = errors.mapped();
    //将错误信息返回给前端页面
    res.render('errorMessages.ejs', {
      title: '注册失败！',
      message: '原因:',
      error: errors
    });
  } else {
    // 从连接池获取连接
    pool.getConnection(function(err, connection) {
      // 获取前台页面传过来的参数
      var param = req.query || req.params;
      //生成HASH值
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(param.password, salt);
      // 建立连接 增加一个用户信息
      connection.query(userSQL.insert, [param.id, param.name, hash,
          param.email
        ],
        function(
          err, result) {
          if (result) {
            return res.render('message.ejs', {
              title: '注册成功！',
              message: null,
              detail: null
            });
          }
          // 以json形式，把操作结果返回给前台页面
          responseJSON(res, result);
          // 释放连接
          connection.release();
        });
    });
  }
});

//删除用户路由
router.get('/deleteUser', function(req, res, next) {
  pool.getConnection(function(err, connection) {
    // 获取前台页面传过来的参数
    var param = req.query || req.params;
    var id = param.id;
    console.log("id:" + param.id);
    // 建立连接，使用学号登陆
    connection.query(userSQL.deleteUserById, [param.id],
      function(err, rows) {
        if (err) {
          console.log("deleted fail");
        } else {
          res.redirect('../home');
        }
        connection.release();
      });
  });
});

//判断用户的登陆信息，如果成功则转到主页面
router.get('/login', function(req, res, next) {
  // 从连接池获取连接
  pool.getConnection(function(err, connection) {
    // 获取前台页面传过来的参数
    var param = req.query || req.params;
    // 建立连接，使用学号登陆
    connection.query(userSQL.getUserById, [param.id],
      function(err, result, fields) {
        if (result.length == 1) {
          if (bcrypt.compareSync(param.password, result[0].password)) {
            req.session.user = {
              user_id: param.id,
              //role_id 0为管理员，1为普通用户
              role: result[0].role_id
            };
            return res.redirect('../home');
          } else {
            req.session.user = false;
            return res.redirect('../login');
          }
        } else {
          req.session.user = false;
          return res.redirect('../login');
        }
        // 释放连接
        connection.release();
      });
  });
});
//登出路由
router.get('/logout', function(req, res, next) {
  req.session.user = false;
  res.redirect('../login');
});

module.exports = router;
