const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const request = require('request');
const router = express.Router();
var session=require('express-session');
const res = require("express/lib/response");


  /**
 * 파일 명 : login.js
 * @author : 문승연
 * @date : 2022-04-09
 * @description : 로그인/아웃 출력
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));


router.get('/login', function(req, res, next){
    res.render('login', {
    isLogined: true, 
    empName: req.session.empName, 
    authCode: req.session.authCode,
    empNo: req.session.empNo
  })
  })


module.exports = router;