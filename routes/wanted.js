const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const request = require('request');
const router = express.Router();
var session=require('express-session');
const {connection} = require("../config/dao.js");

  /**
 * 파일 명 : wanted.js
 * @author : 문승연
 * @date : 2022-04-14
 * @description : 신청근무 프론트
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));


router.get('/wanted', function (req, res, next) {
  res.render('wanted', {
    isLogined: true,
    empName: req.session.empName,
    authCode: req.session.authCode,
    empNo: req.session.empNo,
    teamNo: req.session.teamNo,
    deptNo: req.session.deptNo,
    statRule: req.session.statRule
  })
})




module.exports = router;
