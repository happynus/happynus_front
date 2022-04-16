const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const request = require("request");
const router = express.Router();
var session = require("express-session");
const { connection } = require("../config/dao.js");

/**
 * 파일 명 : superMain.js
 * @author : 문승연
 * @date : 2022-04-05
 * @description :
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const superMainUrl = "http://localhost:5000/superMain";
const dutyAdminUrl = "http://localhost:5000/dutyMain";
const normalUrl = "http://localhost:5000/normalMain";
const normalMainDutyCheck = "http://localhost:5000/normalMainDutyCheck";
const teamDutyCheck ="http://localhost:5000/teamDutyCheck"
//const checkCoworker = "https://dutyapi.azurewebsites.net/api/emp/coworkers";


// 슈퍼관리자 권한 페이지
router.get("/superMain", function (req, res, next) {
  res.render("superMain", {
    isLogined: true,
    empName: req.session.empName,
    authCode: req.session.authCode,
    empNo: req.session.empNo,
  });
});

router.get("/empManage", function (req, res, next) {
  request(
    "https://dutyapi.azurewebsites.net/api/emp/total",
    function (error, response, body) {
      if (error) {
        console.log(error);
      }
      var obj = JSON.parse(body);
      res.render("empManage", {
        emps: obj,
        isLogined: true,
        empName: req.session.empName,
        authCode: req.session.authCode,
        empNo: req.session.empNo,
      });
    }
  );
});


// 듀티관리자 권한 페이지
router.get("/dutyMain", function (req, res, next) {
  //request(dutyAdminUrl, function (err, res) {});
  res.render("dutyMain", {
    isLogined: true,
    empName: req.session.empName,
    authCode: req.session.authCode,
    empNo: req.session.empNo,
  });
});

router.get("/teamDutyAdmin", function (req, res, next) {
  //request(teamDutyAdmin, function (err, res) {});
  res.render("teamDutyAdmin", {
    isLogined: true,
    empName: req.session.empName,
    authCode: req.session.authCode,
    empNo: req.session.empNo,
  });
});

router.get("/teamDutyCheck", function (req, res, next) {
  //request(teamDutyCheck, function (err, res) {});
  res.render("teamDutyCheck", {
    isLogined: true,
    empName: req.session.empName,
    authCode: req.session.authCode,
    empNo: req.session.empNo,
    teamNo: req.session.teamNo
  });
});


// 일반근무자 권한 페이지
router.get("/normalMain", function (req, res, next) {
  request(checkCoworker, function (err, response, body) {
    if (err) throw err;
    var obj = body;
    console.log("바디", body);
    res.render("normalMain", {
      coworker: obj,
      isLogined: true,
      empNo: req.session.empNo,
      empName: req.session.empName,
    });
  });
});

router.get("/normalMainDutyCK", function (req, res, next) {
  //request(normalMainDutyCheck, function (err, res) {});
  res.render("normalMainDutyCK", {
    isLogined: true,
    empName: req.session.empName,
    authCode: req.session.authCode,
    empNo: req.session.empNo,
  });
});

module.exports = router;
