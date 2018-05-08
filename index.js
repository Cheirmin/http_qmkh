const express = require('express');
const app = express();
const formidable = require('express-formidable');
const session = require('express-session')
const conn = require('./conn');
//console.log(conn);

app.use(formidable());

//app.set('trust proxy',1);
app.use(session({
  secret:'dkfjuehj',
  //resave:false,
  //saveUninitialized:true,
  cookie:{maxAage:600000}
}))


app.get('/', function(req, res) {


  res.redirect('/index.html');
});
// 静态文件服务
app.use(express.static('public'));

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;


  console.log('app listening at http://%s:%s', host, port);
});
app.get('/test',function(req,res,next){
  res.end(JSON.stringify(req.query));
})

app.post('/test',function(req,res,next){
  res.end(JSON.stringify(req.fields));
})
// 登陆后访问
app.get('/authed', function(req, res, next) {
  //req.session.user = {username:req.query.username}; login
  if(req.session.user){
    res.end("logined.  <a href='/logout'>logout</a>")
  }else{
    res.redirect('/login.html');
  }
});
//登陆后访问
app.post('/authed', function(req, res, next) {
  console.log(req.fields);
  console.log(req.files);
  return res.json(req.fields);


});
app.get('/logout',function(req,res,next){
  req.session.user= false;
  res.redirect('/');
})

app.get("/login",function(req,res,next){
  //  console.log("username:",req.query.username);
  // console.log("password:",req.query.password);
  //res.end("ok")
  conn.query(
    'SELECT * FROM `users` where `username`=? and `password`=? ',
    [req.query.username,req.query.password],
    function(err, results, fields) {
      //唯一的值
      if(results.length==1){
        console.log("logined");
        // 登陆成功
        req.session.user = {username:req.query.username,
          role:'admin'};
        res.redirect('/authed');
      }else{
        req.session.user = false;
        console.log("failed");
        res.end("fail");
      }


      }
  );

})

app.post('/register',function(req,res,next){
  console.log(req.fields);
  conn.query(
    "insert into users (username,password) values (?,?)",
    [req.fields.username,req.fields.password],
    function(err,result){
      console.log(err);
      console.log(result.insertId);
    }
  )
  res.end("ok")
})
