var express = require('express');
var router = express.Router();
//密码加密
// var bcrypt = require('bcryptjs');
var bcrypt = require('bcryptjs');

//validator  载入中间键验证
var expressValidator = require('express-validator');
var check = require('express-validator/check').check;
var validationResult = require('express-validator/check').validationResult;


// 导入MySQL模块
var mysql = require('mysql2');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/Usersql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
// 响应一个JSON数据
var responseJSON = function(res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '-200',
      msg: '操作失败，请查明原因,点击浏览器返回按钮刷新重试! ',
      moreMsg: '提示:同一学号无法重复注册',
    });
  } else {
    res.json(ret);
  }
};

// 添加用户，与用户信息提示
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
    return res.json({
      message: '注册信息错误提示:',
      error: errors.mapped()
    });
    //  var errors = errors.mapped();
    // return res.render('error', {
    //   message: '注册信息错误提示:',
    //   error: errors
    // });
  } else {
    // 从连接池获取连接
    pool.getConnection(function(err, connection) {

      // 获取前台页面传过来的参数
      var param = req.query || req.params;

      /*生成HASH值*/
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(param.password, salt);

      // 建立连接 增加一个用户信息
      connection.query(userSQL.insert, [param.id, param.name, hash,
          param
          .email
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

    // res.json({
    //   msg: 'success'
    // });
  }

});


router.get('/home', function(req, res, next) {
  // 从连接池获取连接
  pool.getConnection(function(err, connection) {
    // 获取前台页面传过来的参数
    var param = req.query || req.params;
    // 建立连接 根据手机号查找密码
    if (connection.query(userSQL.getPwdById, [param.id])) {

    } else {

    }
    connection.query(userSQL.getPwdById, [param.id],
      function(err, result) {
        if (bcrypt.compareSync(param.password, result[0].password)) {
          // res.send("1");
          res.redirect('../home');
          // connection.query(userSQL.updateLoginStatusById, [1, result[
          //   0].id], function(err, result) {});
        } else {
          res.redirect('../login');
        }
        // 释放连接
        connection.release();
      });
  });
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
