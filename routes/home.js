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
    res.render('home', {
      title: 'Home'
    });
  } else {
    res.redirect('../login');
  }
});

module.exports = router;
