var express = require('express');
var router = express.Router();
var session = require('express-session');
var formidable = require('express-formidable');
var app = express();

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
      res.render('home', {
        title: '管理员页面',
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
