const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const request = require('request');
const router = express.Router();
var session=require('express-session');

  /**
 * 파일 명 : logout.js
 * @author : 문승연
 * @date : 2022-04-09
 * @description : 로그인/아웃 출력
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));




// router.get('/logout', function(req, res, next){
//   res.render('logout', {
//   empNo: req.session.empNo,
//   session:  req.session
// })
// })

var logoutUrl = "http://localhost:5000/logout"

router.get('/logout', function(req, res, next){
  request(logoutUrl,function(err,res){
  });
  res.render('logout',{
    empNo: req.session.empNo,
    session: req.session
  });
});



module.exports = router;